import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard, type BoardPlayer } from "../lib/recommend";
import { TierBadge } from "./TierBadge";
import { RedZoneBadge } from "./RedZoneBadge";
import { PpgBadge } from "./PpgBadge";
import { useDetail } from "../state/detailStore";

export function MyQueue() {
  const { state, dispatch } = useDraft();
  const { open } = useDetail();
  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);
  const byId = useMemo(() => new Map(board.map((p) => [p.id, p])), [board]);

  const queued = state.queue.map((id) => byId.get(id)).filter((p): p is BoardPlayer => !!p);
  if (queued.length === 0) return null;

  function move(id: string, dir: -1 | 1) {
    const i = state.queue.indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= state.queue.length) return;
    const next = [...state.queue];
    [next[i], next[j]] = [next[j], next[i]];
    dispatch({ type: "SET_QUEUE", queue: next });
  }

  function remove(id: string) {
    dispatch({ type: "SET_QUEUE", queue: state.queue.filter((q) => q !== id) });
  }

  return (
    <div className="my-queue">
      <div className="my-queue-label">My queue</div>
      <div className="queue-list">
        {queued.map((p, i) => {
          const taken = p.state !== "available";
          return (
            <div key={p.id} className={`queue-row ${taken ? "taken" : ""}`}>
              <span className="queue-rank">{i + 1}</span>
              <TierBadge tier={p.tier} />
              <span className="info-trigger queue-name" onClick={() => open(p.id)} title="Click for player details">
                {p.name}
              </span>
              <span className="queue-actions">
                <button className="queue-btn" onClick={() => move(p.id, -1)} disabled={i === 0} title="Move up">
                  ↑
                </button>
                <button className="queue-btn" onClick={() => move(p.id, 1)} disabled={i === queued.length - 1} title="Move down">
                  ↓
                </button>
                <button className="queue-btn" onClick={() => remove(p.id)} title="Remove from queue">
                  ✕
                </button>
              </span>
              {taken ? (
                <span className="queue-taken-tag">{p.state === "mine" ? "drafted" : "taken"}</span>
              ) : (
                <span className="row-badges queue-badges">
                  <PpgBadge player={p} />
                  <RedZoneBadge player={p} />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
