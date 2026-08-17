import { useMemo, useState } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS, type Position } from "../data/players";
import { buildBoard, type BoardPlayer } from "../lib/recommend";
import { TierBadge } from "./TierBadge";
import { InjuryBadge } from "./InjuryBadge";
import { RedZoneBadge } from "./RedZoneBadge";
import { PpgBadge } from "./PpgBadge";
import { useDetail } from "../state/detailStore";

const TABS: Array<Position | "ALL"> = ["ALL", "QB", "RB", "WR", "TE", "K", "DST"];

export function PlayerBoard() {
  const { state, dispatch } = useDraft();
  const { open } = useDetail();
  const [tab, setTab] = useState<Position | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [hidePicked, setHidePicked] = useState(true);

  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);

  const rows = board.filter((p) => {
    if (tab !== "ALL" && p.position !== tab) return false;
    if (hidePicked && p.state !== "available") return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  function cycle(p: BoardPlayer) {
    dispatch({ type: "CYCLE_PICK", playerId: p.id });
  }

  return (
    <section className="player-board">
      <div className="board-toolbar">
        <div className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <input className="input" placeholder="Search player…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <label className="check">
          <input type="checkbox" checked={hidePicked} onChange={(e) => setHidePicked(e.target.checked)} />
          Hide picked
        </label>
      </div>

      <div className="board-list">
        {rows.map((p) => (
          <button key={p.id} className={`board-row state-${p.state}`} onClick={() => cycle(p)}>
            <span className="rank">#{p.overallRank}</span>
            <TierBadge tier={p.tier} />
            <span
              className="pname info-trigger"
              onClick={(e) => {
                e.stopPropagation();
                open(p.id);
              }}
              title="Click for player details"
            >
              {p.name}
            </span>
            <span className={`state-tag ${p.state}`}>{p.state === "available" ? "" : p.state === "mine" ? "MINE" : "picked"}</span>
            <span
              className={`queue-star ${state.queue.includes(p.id) ? "queued" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "TOGGLE_QUEUE", playerId: p.id });
              }}
              title={state.queue.includes(p.id) ? "Remove from queue" : "Add to my queue"}
            >
              {state.queue.includes(p.id) ? "★" : "☆"}
            </span>
            <span className="row-meta">
              <span className="pmeta">{p.position} · {p.team}</span>
              <PpgBadge player={p} />
              <RedZoneBadge player={p} />
              <InjuryBadge id={p.id} />
            </span>
          </button>
        ))}
        {rows.length === 0 && <div className="empty-state">No players match.</div>}
      </div>
    </section>
  );
}
