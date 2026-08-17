import { useEffect, useMemo } from "react";
import { useDraft } from "../state/draftStore";
import { useDetail } from "../state/detailStore";
import { PLAYERS } from "../data/players";
import { buildBoard, redZoneBadgeInfo, type BoardPlayer } from "../lib/recommend";
import { TEAM_CONTEXT } from "../data/teams";
import { INJURY_INFO } from "../data/injuries";
import { PLAYER_STATS } from "../data/stats";
import { TierBadge } from "./TierBadge";

const SOS_LABEL: Record<string, string> = { easy: "Easy", medium: "Medium", hard: "Hard" };

function findPlayer(board: BoardPlayer[], id: string | null): BoardPlayer | null {
  if (!id) return null;
  return board.find((p) => p.id === id) ?? null;
}

export function PlayerDetailModal() {
  const { state, dispatch } = useDraft();
  const { openId, close } = useDetail();
  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);
  const player = findPlayer(board, openId);

  useEffect(() => {
    if (!openId) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, close]);

  if (!player) return null;

  const ctx = TEAM_CONTEXT[player.team];
  const rz = redZoneBadgeInfo(player);
  const injury = INJURY_INFO[player.id];
  const stats = PLAYER_STATS[player.id];

  function setState(next: "mine" | "picked" | "available") {
    dispatch({ type: "SET_PICK", playerId: player!.id, state: next });
  }

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close} title="Close">
          ✕
        </button>

        <div className="modal-head">
          <TierBadge tier={player.tier} />
          <div>
            <h2>{player.name}</h2>
            <div className="muted">
              {player.position} · {player.team} · #{player.overallRank} overall · {player.position}
              {player.positionRank}
            </div>
          </div>
        </div>

        <div className="modal-stats-grid">
          <div className="modal-stat">
            <span className="modal-stat-label">Avg points/gm</span>
            <span className="modal-stat-value">{stats ? stats.ppg.toFixed(1) : "—"}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-label">Red zone share</span>
            <span className="modal-stat-value">{rz ? `${rz.pct}%` : "—"}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-label">Bye week</span>
            <span className="modal-stat-value">{ctx?.bye ?? "—"}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-label">Playoff SOS</span>
            <span className={`modal-stat-value sos-${ctx?.sos ?? ""}`}>{ctx ? SOS_LABEL[ctx.sos] : "—"}</span>
          </div>
        </div>

        {stats ? (
          <div className="modal-section">
            <h3>Last 3 seasons</h3>
            <table className="season-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>PPG</th>
                  <th>Games</th>
                  <th>Missed time</th>
                </tr>
              </thead>
              <tbody>
                {stats.seasons.map((s) => {
                  const notInLeague = s.gamesPlayed === 0 && s.gamesMissed === 0;
                  return (
                    <tr key={s.year}>
                      <td>{s.year}</td>
                      <td>{notInLeague ? "—" : s.ppg.toFixed(1)}</td>
                      <td>
                        {notInLeague ? "—" : `${s.gamesPlayed}/${s.gamesPlayed + s.gamesMissed}`}
                      </td>
                      <td className="season-reason">{s.missedReason ?? "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="modal-section">
            <h3>Last 3 seasons</h3>
            <p>No history on file yet.</p>
          </div>
        )}

        {stats && stats.seasons.some((s) => s.weekly.length > 0) && (
          <div className="modal-section">
            <h3>Weekly points</h3>
            {[...stats.seasons]
              .sort((a, b) => b.year - a.year)
              .map((s) => {
                if (s.weekly.length === 0) return null;
                return (
                  <div key={s.year} className="weekly-year-block">
                    <div className="weekly-year-head">
                      <span className="weekly-year-label">{s.year}</span>
                      <span className="weekly-year-meta">
                        {s.ppg.toFixed(1)} avg · {s.gamesPlayed} gm
                      </span>
                    </div>
                    <div className="weekly-grid">
                      {s.weekly.map((pts, i) => {
                        const above = pts >= s.ppg;
                        return (
                          <div key={i} className={`weekly-cell ${above ? "above" : "below"}`}>
                            <span className="weekly-cell-week">W{i + 1}</span>
                            <span className="weekly-cell-pts">{pts.toFixed(1)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {rz && (
          <div className="modal-section">
            <h3>Red zone role</h3>
            <p>{rz.note}</p>
          </div>
        )}

        {injury && (
          <div className="modal-section">
            <h3>Injury</h3>
            <p>{injury.note}</p>
          </div>
        )}

        {ctx?.offenseNote && (
          <div className="modal-section">
            <h3>Team context</h3>
            <p>{ctx.offenseNote}</p>
          </div>
        )}
        {ctx?.sosNote && (
          <div className="modal-section">
            <h3>Playoff schedule (wk 15-17)</h3>
            <p>{ctx.sosNote}</p>
          </div>
        )}

        <div className="modal-actions">
          {player.state !== "mine" && (
            <button className="btn primary" onClick={() => setState("mine")}>
              Mark as mine
            </button>
          )}
          {player.state !== "picked" && (
            <button className="btn" onClick={() => setState("picked")}>
              Mark picked
            </button>
          )}
          {player.state !== "available" && (
            <button className="btn ghost" onClick={() => setState("available")}>
              Undo (mark available)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
