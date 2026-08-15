import { useState } from "react";
import { DraftProvider } from "./state/draftStore";
import { useSleeperSync } from "./hooks/useSleeperSync";
import { Header } from "./components/Header";
import { SettingsPanel } from "./components/SettingsPanel";
import { UpcomingPicks } from "./components/UpcomingPicks";
import { PlayerBoard } from "./components/PlayerBoard";

function Shell() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  useSleeperSync();

  return (
    <div className="app-shell">
      <Header onToggleSettings={() => setSettingsOpen((v) => !v)} />
      <div className="app-body">
        {settingsOpen && <SettingsPanel />}
        <main className="app-main">
          <UpcomingPicks />
          <PlayerBoard />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DraftProvider>
      <Shell />
    </DraftProvider>
  );
}
