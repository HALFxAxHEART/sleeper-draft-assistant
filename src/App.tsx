import { useState } from "react";
import { DraftProvider } from "./state/draftStore";
import { useSleeperSync } from "./hooks/useSleeperSync";
import { Header } from "./components/Header";
import { SettingsPanel } from "./components/SettingsPanel";
import { UpcomingPicks } from "./components/UpcomingPicks";
import { PlayerBoard } from "./components/PlayerBoard";
import { DraftReview } from "./components/DraftReview";

function Shell() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [view, setView] = useState<"draft" | "review">("draft");
  useSleeperSync();

  return (
    <div className="app-shell">
      <Header onToggleSettings={() => setSettingsOpen((v) => !v)} view={view} onSetView={setView} />
      <div className="app-body">
        {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
        <main className="app-main">
          {view === "draft" ? (
            <>
              <UpcomingPicks />
              <PlayerBoard />
            </>
          ) : (
            <DraftReview />
          )}
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
