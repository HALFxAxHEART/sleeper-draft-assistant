import { useMemo, useState } from "react";
import { useDraft } from "../state/draftStore";
import { PLAYERS, type Position } from "../data/players";
import { buildBoard, type BoardPlayer } from "../lib/recommend";
import { TierBadge } from "./TierBadge";
import { SOSBadge } from "./SOSBadge";

const TABS: Array<Position | "ALL"> = ["ALL", "QB", "RB", "WR", "TE", "K", "DST"];

export function PlayerBoard() {
  const { state, dispatch } = useDraft();
  const [tab, setTab] = useState<Position | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [hidePicked, setHidePicked] = useState(false);

  const board = useMemo(() => buildBoard(PLAYERS, state.pickStates), [state.pickStates]);

  const rows = board.filter((p) => {
    if (tab !== "ALL" && p.position !== tab) return false;
    if (hidePicked && p.state !== "available") return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  function cycle(p: BoardPlayer) {
    dispatch({ type: "CYCLE_PICK", playerId: p.id });
  }

  return (
    <section className="player-board">
      <div className="board-toolbar">
        <div className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <input className="input" placeholder="Search player…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <label className="check">
          <input type="checkbox" checked={hidePicked} onChange={(e) => setHidePicked(e.target.checked)} />
          Hide picked
        </label>
      </div>

      <div className="board-list">
        {rows.map((p) => (
          <button key={p.id} className={`board-row state-${p.state}`} onClick={() => cycle(p)}>
            <span className="rank">#{p.overallRank}</span>
            <TierBadge tier={p.tier} />
            <span className="pname">{p.name}</span>
            <span className="pmeta">
              {p.position} · {p.team}
            </span>
            <span className="pos-rank muted">
              {p.position}
              {p.positionRank}
            </span>
            <SOSBadge team={p.team} />
            <span className={`state-tag ${p.state}`}>{p.state === "available" ? "" : p.state === "mine" ? "MINE" : "picked"}</span>
          </button>
        ))}
        {rows.length === 0 && <div className="empty-state">No players match.</div>}
      </div>
    </section>
  );
}
