import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard } from "../lib/recommend";
import { buildRosterSlots } from "../lib/roster";
import type { PickLabel } from "../lib/review";
import { TierBadge } from "./TierBadge";
import { PosText } from "./PosText";
import { useDetail } from "../state/detailStore";

const LABEL_TEXT: Record<PickLabel, string> = {
  best: "Best available",
  solid: "Solid",
  reach: "Reach",
  bad: "Big reach",
  ungraded: "Ungraded",
};

export function MyRoster() {
  const { state } = useDraft();
  const { open } = useDetail();
  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);
  const slots = useMemo(
    () => buildRosterSlots(board, state.minePickOrder, state.settings.roster, state.pickGrades),
    [board, state.minePickOrder, state.settings.roster, state.pickGrades],
  );

  return (
    <section className="my-roster">
      <h2>My Roster ({state.minePickOrder.length} drafted)</h2>
      <div className="roster-slots">
        {slots.map((slot) => (
          <div
            key={slot.key}
            className={`roster-slot ${slot.player ? "filled" : "empty"} ${slot.grade && slot.grade.label !== "ungraded" ? `grade-${slot.grade.label}` : ""}`}
          >
            <span className="roster-slot-label">{slot.label}</span>
            {slot.player ? (
              <>
                <div className="roster-slot-player">
                  <TierBadge tier={slot.player.tier} />
                  <span
                    className="info-trigger roster-slot-name"
                    onClick={() => open(slot.player!.id)}
                    title="Click for player details"
                  >
                    {slot.player.name}
                  </span>
                </div>
                <span className="pmeta">
                  <PosText position={slot.player.position} /> · {slot.player.team}
                </span>
                {slot.grade && slot.grade.label !== "ungraded" && (
                  <span className={`roster-slot-grade label-tag-${slot.grade.label}`} title={slot.grade.note}>
                    {LABEL_TEXT[slot.grade.label]}
                  </span>
                )}
              </>
            ) : (
              <span className="roster-slot-empty-label">Open</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
