import { useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS } from "../data/players";
import { buildBoard, recommendAllRounds } from "../lib/recommend";
import { TierBadge } from "./TierBadge";
import { SOSBadge } from "./SOSBadge";
import { InjuryBadge } from "./InjuryBadge";
import { ByeSummary } from "./ByeSummary";
import { TEAM_CONTEXT } from "../data/teams";

export function UpcomingPicks() {
  const { state, dispatch } = useDraft();
  const { settings, pickStates } = state;
  const board = useMemo(() => buildBoard(PLAYERS, pickStates), [pickStates]);

  // Every remaining pick, projected: other teams are simulated taking best-available
  // between now and each of your picks, so round 5's board isn't the same as round 1's.
  const recs = useMemo(() => recommendAllRounds(board, settings), [board, settings]);

  return (
    <section className="upcoming-picks">
      <div className="upcoming-picks-head">
        <h2>All your picks ({recs.length} left)</h2>
        <ByeSummary />
      </div>
      <div className="pick-cards">
        {recs.map((rec) => (
          <div key={rec.round} className="pick-card">
            <div className="pick-card-head">
              <span className="round-tag">Round {rec.round}</span>
              <span className="muted">overall #{rec.overallPick}</span>
            </div>
            <div className="take-line">
              Take: <strong>{rec.desiredSlot === "BEST" ? "best player available" : rec.desiredSlot}</strong>
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
                  {rec.primary.position} · {rec.primary.team} · Bye {TEAM_CONTEXT[rec.primary.team]?.bye ?? "?"}
                </span>
                <SOSBadge team={rec.primary.team} />
                <InjuryBadge id={rec.primary.id} />
              </button>
            ) : (
              <div className="pick-primary empty">No players left</div>
            )}
            {rec.scarcityWarning && <div className="scarcity">{rec.scarcityWarning}</div>}
            {rec.byeWarning && <div className="bye-warning">{rec.byeWarning}</div>}
            {rec.injuryWarning && <div className="injury-warning">{rec.injuryWarning}</div>}
            {rec.alternates.length > 0 && (
              <div className="alternates">
                <div className="alternates-label">Top {rec.alternates.length + 1} projected available:</div>
                {rec.alternates.map((alt) => (
                  <button
                    key={alt.id}
                    className="alt-chip"
                    onClick={() => dispatch({ type: "SET_PICK", playerId: alt.id, state: "mine" })}
                    title="Click to mark as drafted by you instead"
                  >
                    <TierBadge tier={alt.tier} /> {alt.name}{" "}
                    <span className="muted">
                      {alt.position} · {alt.team} · Bye {TEAM_CONTEXT[alt.team]?.bye ?? "?"}
                    </span>
                    <InjuryBadge id={alt.id} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
