import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard, myByeCounts } from "../lib/recommend";

export function ByeSummary() {
  const { state } = useDraft();
  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);
  const counts = useMemo(() => myByeCounts(board), [board]);

  const weeks = Array.from(counts.keys()).sort((a, b) => a - b);
  if (weeks.length === 0) return null;

  return (
    <div className="bye-summary">
      <span className="bye-summary-label">Your byes:</span>
      {weeks.map((wk) => {
        const count = counts.get(wk)!;
        return (
          <span key={wk} className={`bye-chip ${count >= 3 ? "clash" : count === 2 ? "warn" : ""}`}>
            Wk{wk}: {count}
          </span>
        );
      })}
    </div>
  );
}
