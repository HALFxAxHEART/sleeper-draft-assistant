import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard, recommendForRound } from "../lib/recommend";
import { overallPickForRound, totalRounds } from "../lib/types";
import { TierBadge } from "./TierBadge";

const LOOKAHEAD = 4;

export function UpcomingPicks() {
  const { state, dispatch } = useDraft();
  const { settings, pickStates } = state;
  const board = useMemo(() => buildBoard(PLAYERS, pickStates), [pickStates]);

  const rounds = totalRounds(settings.roster);

  // Find the first round that doesn't yet have a "mine" pick assigned, so the list tracks live progress loosely.
  const minePicked = board.filter((p) => p.state === "mine").length;
  const startRound = Math.min(minePicked + 1, Math.max(rounds - LOOKAHEAD + 1, 1));
  const roundsToShow = Array.from({ length: LOOKAHEAD }, (_, i) => startRound + i).filter((r) => r <= rounds);

  return (
    <section className="upcoming-picks">
      <h2>Your upcoming picks</h2>
      <div className="pick-cards">
        {roundsToShow.map((round) => {
          const overall = overallPickForRound(round, settings.slot, settings.teams);
          const rec = recommendForRound(board, round, overall, settings);
          return (
            <div key={round} className="pick-card">
              <div className="pick-card-head">
                <span className="round-tag">Round {round}</span>
                <span className="muted">overall #{overall}</span>
                <span className="want-tag">wants {rec.desiredSlot}</span>
              </div>
              {rec.primary ? (
                <button
                  className="pick-primary"
                  onClick={() => dispatch({ type: "SET_PICK", playerId: rec.primary!.id, state: "mine" })}
                  title="Click to mark as drafted by you"
                >
                  <TierBadge tier={rec.primary.tier} />
                  <span className="pname">{rec.primary.name}</span>
                  <span className="pmeta">
                    {rec.primary.position} · {rec.primary.team}
                  </span>
                </button>
              ) : (
                <div className="pick-primary empty">No players left</div>
              )}
              {rec.scarcityWarning && <div className="scarcity">{rec.scarcityWarning}</div>}
              {rec.alternates.length > 0 && (
                <div className="alternates">
                  {rec.alternates.map((alt) => (
                    <span key={alt.id} className="alt-chip">
                      <TierBadge tier={alt.tier} /> {alt.name} <span className="muted">{alt.position}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
