import { useState } from "react";
import { useDraft } from "../state/draftStore";

export function Header({ onToggleSettings }: { onToggleSettings: () => void }) {
  const { state, dispatch } = useDraft();
  const [draftInput, setDraftInput] = useState(state.settings.sleeperDraftId);
  const [usernameInput, setUsernameInput] = useState(state.settings.sleeperUsername);

  function connect() {
    dispatch({ type: "SET_SETTINGS", settings: { sleeperDraftId: draftInput.trim(), sleeperUsername: usernameInput.trim() } });
  }

  function disconnect() {
    setDraftInput("");
    dispatch({ type: "SET_SETTINGS", settings: { sleeperDraftId: "" } });
    dispatch({ type: "SLEEPER_STATUS", status: "idle" });
  }

  const status = state.sleeperStatus;
  const statusLabel =
    status === "connected" ? "Live-synced" : status === "syncing" ? "Connecting…" : status === "error" ? "Sync error" : "Not connected";
  const statusClass = status === "connected" ? "ok" : status === "error" ? "err" : "muted";

  return (
    <header className="app-header">
      <div className="brand">
        <h1>Draft Board</h1>
        <span className="subtitle">Sleeper draft assistant</span>
      </div>

      <div className="sleeper-connect">
        {state.settings.sleeperDraftId ? (
          <>
            <span className={`status-dot ${statusClass}`} />
            <span className="status-text">{statusLabel}</span>
            {state.sleeperStatus === "error" && <span className="status-text err">{state.sleeperError}</span>}
            <button className="btn ghost" onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Sleeper draft link or ID"
              value={draftInput}
              onChange={(e) => setDraftInput(e.target.value)}
              className="input"
            />
            <input
              placeholder="your Sleeper username (optional)"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="input"
            />
            <button className="btn primary" onClick={connect} disabled={!draftInput.trim()}>
              Sync live picks
            </button>
          </>
        )}
      </div>

      <button className="btn ghost" onClick={onToggleSettings}>
        Settings
      </button>
    </header>
  );
}
