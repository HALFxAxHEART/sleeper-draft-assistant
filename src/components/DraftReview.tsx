import { useMemo, useState } from "react";
import { loadArchive, removeDraft, type ArchivedDraft } from "../lib/archive";
import { reviewDraft, type PickLabel } from "../lib/review";
import { suggestTrades } from "../lib/trades";
import { PosText } from "./PosText";

const STATUS_LABEL: Record<string, string> = {
  complete: "Complete",
  drafting: "In progress",
  paused: "Paused",
  pre_draft: "Not started",
};

const LABEL_TEXT: Record<PickLabel, string> = {
  best: "Best available",
  solid: "Solid",
  reach: "Reach",
  bad: "Big reach",
  ungraded: "Ungraded",
};

export function DraftReview() {
  const [archive, setArchive] = useState<ArchivedDraft[]>(() => loadArchive());
  const [selectedId, setSelectedId] = useState<string | null>(archive[0]?.draftId ?? null);

  const sorted = useMemo(() => [...archive].sort((a, b) => b.savedAt - a.savedAt), [archive]);
  const selected = sorted.find((d) => d.draftId === selectedId) ?? sorted[0] ?? null;
  const teams = useMemo(() => (selected ? reviewDraft(selected) : []), [selected]);
  const trades = useMemo(() => (selected ? suggestTrades(selected) : []), [selected]);
  const hasMyTeam = teams.some((t) => t.isMine);

  function refresh() {
    setArchive(loadArchive());
  }

  function handleRemove(draftId: string) {
    removeDraft(draftId);
    refresh();
    if (selectedId === draftId) setSelectedId(null);
  }

  if (sorted.length === 0) {
    return (
      <section className="draft-review">
        <div className="empty-state">
          No saved drafts yet. Connect to a live Sleeper draft from the header — picks save automatically as they happen, and you can
          come back here for the review once it's done.
        </div>
      </section>
    );
  }

  return (
    <section className="draft-review">
      <div className="review-layout">
        <div className="review-list">
          {sorted.map((d) => (
            <button
              key={d.draftId}
              className={`review-list-item ${selected?.draftId === d.draftId ? "active" : ""}`}
              onClick={() => setSelectedId(d.draftId)}
            >
              <span className="review-list-name">{d.name}</span>
              <span className="review-list-meta">
                {d.season} · {STATUS_LABEL[d.status] ?? d.status} · {d.picks.length} picks
              </span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="review-detail">
            <div className="review-detail-head">
              <div>
                <h2>{selected.name}</h2>
                <span className="muted">
                  {selected.season} · {STATUS_LABEL[selected.status] ?? selected.status} · {selected.picks.length} picks synced
                </span>
              </div>
              <button className="btn danger" onClick={() => handleRemove(selected.draftId)}>
                Remove
              </button>
            </div>
            {selected.status !== "complete" && (
              <div className="scarcity">Draft still in progress — this is the review of picks made so far, updating live.</div>
            )}

            {hasMyTeam && (
              <div className="trade-ideas">
                <h3>Trade ideas to improve your team</h3>
                {trades.length > 0 ? (
                  <div className="trade-list">
                    {trades.map((t, i) => (
                      <div key={i} className="trade-card">
                        <div className="trade-swap">
                          <span className="trade-give">
                            <span className="trade-arrow">▲ give</span> {t.give.name}{" "}
                            <span className="muted">
                              <PosText position={t.give.position} /> #{t.give.rank}
                            </span>
                          </span>
                          <span className="trade-get">
                            <span className="trade-arrow get">▼ get</span> {t.get.name}{" "}
                            <span className="muted">
                              <PosText position={t.get.position} /> #{t.get.rank}
                            </span>
                            <span className="trade-partner"> from {t.partnerName}</span>
                          </span>
                        </div>
                        <div className="trade-why">{t.rationale}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="muted trade-none">
                    No clear win-win trades right now — your roster is reasonably balanced, or no other team's surplus lines up with your needs. (Trade ideas need a full draft with every team's picks, i.e. a live Sleeper sync.)
                  </div>
                )}
              </div>
            )}

            <div className="team-grades">
              {teams.map((team) => (
                <div key={team.slot} className={`team-card ${team.isMine ? "mine" : ""}`}>
                  <div className="team-card-head">
                    <span className="team-name">
                      {team.teamName}
                      {team.isMine && <span className="you-tag">YOU</span>}
                    </span>
                    <span className="team-head-badges">
                      <span className="team-rank">{team.rank != null ? `#${team.rank} of ${team.totalTeams}` : "Unranked"}</span>
                      <span className={`letter-grade grade-${team.grade}`}>{team.grade}</span>
                    </span>
                  </div>
                  {team.avgGap != null && (
                    <div className="team-avg muted">Avg. {team.avgGap.toFixed(1)} value gap vs. best at position ({team.gradedCount} graded picks)</div>
                  )}
                  <div className="team-picks">
                    {team.picks.map((g) => (
                      <div key={g.pick.overall} className={`team-pick label-${g.label}`}>
                        <span className="tp-round">R{g.pick.round}</span>
                        <span className="tp-name">{g.pick.playerName}</span>
                        <span className="tp-pos muted">
                          <PosText position={g.pick.position} /> · {g.pick.nflTeam}
                        </span>
                        <span className={`tp-label label-tag-${g.label}`}>{LABEL_TEXT[g.label]}</span>
                        {(g.label === "reach" || g.label === "bad") && <div className="tp-note">{g.note}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
