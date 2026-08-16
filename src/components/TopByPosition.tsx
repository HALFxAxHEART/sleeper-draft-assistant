import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard, topAvailableByPosition } from "../lib/recommend";
import { TierBadge } from "./TierBadge";
import { RedZoneBadge } from "./RedZoneBadge";
import { useDetail } from "../state/detailStore";

export function TopByPosition() {
  const { state, dispatch } = useDraft();
  const { open } = useDetail();
  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);
  const entries = useMemo(() => topAvailableByPosition(board), [board]);

  return (
    <section className="top-by-pos">
      {entries.map((e) => (
        <div key={e.label} className="tbp-cell">
          <span className="tbp-label">{e.label}</span>
          {e.player ? (
            <button
              className="tbp-player"
              onClick={() => dispatch({ type: "SET_PICK", playerId: e.player!.id, state: "mine" })}
              title="Click to mark as drafted by you"
            >
              <TierBadge tier={e.player.tier} />
              <span
                className="tbp-name info-trigger"
                onClick={(e2) => {
                  e2.stopPropagation();
                  open(e.player!.id);
                }}
                title="Click for player details"
              >
                {e.player.name}
              </span>
              <span className="row-badges">
                <RedZoneBadge player={e.player} />
                <span className="tbp-team muted">{e.player.team}</span>
              </span>
            </button>
          ) : (
            <div className="tbp-player empty">None left</div>
          )}
        </div>
      ))}
    </section>
  );
}
