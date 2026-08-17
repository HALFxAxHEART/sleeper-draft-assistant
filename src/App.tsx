import { useState } from "react";
import { DraftProvider } from "./state/draftStore";
import { DetailProvider } from "./state/detailStore";
import { useSleeperSync } from "./hooks/useSleeperSync";
import { Header } from "./components/Header";
import { SettingsPanel } from "./components/SettingsPanel";
import { UpcomingPicks } from "./components/UpcomingPicks";
import { PlayerBoard } from "./components/PlayerBoard";
import { DraftReview } from "./components/DraftReview";
import { TopByPosition } from "./components/TopByPosition";
import { PlayerDetailModal } from "./components/PlayerDetailModal";
import { MyRoster } from "./components/MyRoster";
import { MyQueue } from "./components/MyQueue";

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
              <TopByPosition />
              <MyRoster />
              <div className="draft-layout">
                <div className="draft-left">
                  <UpcomingPicks />
                </div>
                <div className="draft-right">
                  <MyQueue />
                  <PlayerBoard />
                </div>
              </div>
            </>
          ) : (
            <DraftReview />
          )}
        </main>
      </div>
      <PlayerDetailModal />
    </div>
  );
}

export default function App() {
  return (
    <DraftProvider>
      <DetailProvider>
        <Shell />
      </DetailProvider>
    </DraftProvider>
  );
}
