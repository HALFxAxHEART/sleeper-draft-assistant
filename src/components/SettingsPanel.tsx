import { useDraft } from "../state/draftStore";
import type { RosterSlots } from "../lib/types";
import { totalRounds } from "../lib/types";
import { StrategyEditor } from "./StrategyEditor";

const ROSTER_FIELDS: Array<{ key: keyof RosterSlots; label: string }> = [
  { key: "QB", label: "QB" },
  { key: "RB", label: "RB" },
  { key: "WR", label: "WR" },
  { key: "TE", label: "TE" },
  { key: "FLEX", label: "FLEX" },
  { key: "K", label: "K" },
  { key: "DST", label: "DST" },
  { key: "BENCH", label: "Bench" },
];

export function SettingsPanel({ onClose }: { onClose: () => void }) {
  const { state, dispatch } = useDraft();
  const { settings } = state;

  function setRoster(key: keyof RosterSlots, value: number) {
    const roster = { ...settings.roster, [key]: Math.max(0, value) };
    dispatch({ type: "SET_ROSTER", roster });
  }

  return (
    <aside className="settings-panel">
      <button className="btn ghost settings-back" onClick={onClose}>
        ← Back
      </button>

      <section>
        <h3>League</h3>
        <label className="field">
          <span>Teams</span>
          <input
            type="number"
            min={2}
            max={20}
            value={settings.teams}
            onChange={(e) => dispatch({ type: "SET_SETTINGS", settings: { teams: Number(e.target.value) || settings.teams } })}
          />
        </label>
        <label className="field">
          <span>Your draft slot</span>
          <input
            type="number"
            min={1}
            max={settings.teams}
            value={settings.slot}
            onChange={(e) => dispatch({ type: "SET_SETTINGS", settings: { slot: Number(e.target.value) || settings.slot } })}
          />
        </label>
        <label className="field">
          <span>Scoring</span>
          <select
            value={settings.scoring}
            onChange={(e) => dispatch({ type: "SET_SETTINGS", settings: { scoring: e.target.value as typeof settings.scoring } })}
          >
            <option>PPR</option>
            <option>Half PPR</option>
            <option>Standard</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Roster ({totalRounds(settings.roster)} rounds)</h3>
        <div className="roster-grid">
          {ROSTER_FIELDS.map(({ key, label }) => (
            <label key={key} className="field small">
              <span>{label}</span>
              <input type="number" min={0} max={10} value={settings.roster[key]} onChange={(e) => setRoster(key, Number(e.target.value))} />
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3>Draft strategy</h3>
        <p className="hint">What you want at each pick. "Best" ignores position and grabs the top tier available.</p>
        <StrategyEditor />
      </section>

      <section>
        <button
          className="btn danger"
          onClick={() => {
            if (confirm("Reset all picked/mine marks? Settings are kept.")) dispatch({ type: "RESET_PICKS" });
          }}
        >
          Reset picks
        </button>
      </section>
    </aside>
  );
}
