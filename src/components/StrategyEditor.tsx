import { useDraft } from "../state/draftStore";
import type { StrategySlot } from "../lib/types";
import { overallPickForRound } from "../lib/types";

const OPTIONS: StrategySlot[] = ["BEST", "RB", "WR", "QB", "TE", "FLEX", "K", "DST"];

export function StrategyEditor() {
  const { state, dispatch } = useDraft();
  const { settings } = state;

  return (
    <div className="strategy-list">
      {settings.strategy.map((slot, i) => {
        const round = i + 1;
        const overall = overallPickForRound(round, settings.slot, settings.teams);
        return (
          <div key={round} className="strategy-row">
            <span className="round-label">
              R{round} <span className="muted">(pick {overall})</span>
            </span>
            <select value={slot} onChange={(e) => dispatch({ type: "SET_STRATEGY_SLOT", round, slot: e.target.value as StrategySlot })}>
              {OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}
