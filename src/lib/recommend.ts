import type { Player, Position } from "../data/players";
import type { DraftSettings, PickState, StrategySlot } from "./types";
import { overallPickForRound, roundForOverallPick, totalRounds } from "./types";
import { TEAM_CONTEXT } from "../data/teams";
import { INJURY_INFO } from "../data/injuries";

export interface BoardPlayer extends Player {
  overallRank: number;
  positionRank: number;
  state: PickState;
}

export function buildBoard(players: Player[], states: Record<string, PickState>): BoardPlayer[] {
  const positionCounts: Partial<Record<Position, number>> = {};
  return players.map((p, i) => {
    positionCounts[p.position] = (positionCounts[p.position] ?? 0) + 1;
    return {
      ...p,
      overallRank: i + 1,
      positionRank: positionCounts[p.position]!,
      state: states[p.id] ?? "available",
    };
  });
}

export function tiersRemaining(board: BoardPlayer[], position: Position): Map<number, number> {
  const counts = new Map<number, number>();
  for (const p of board) {
    if (p.position !== position || p.state !== "available") continue;
    counts.set(p.tier, (counts.get(p.tier) ?? 0) + 1);
  }
  return counts;
}

// Rank penalty for injury risk, in "pick slots" — added to overallRank before sorting for
// recommendations only (the player board itself still shows the true consensus order).
// Toned down overall — injury risk should be a minor tiebreaker, not a dominant factor. A
// short, well-defined absence (~4 games or fewer) isn't treated as a real risk at all — no
// penalty. Beyond that it scales gently: even a real chunk of missed season nudges the pick
// down rather than burying it. A currently-healthy-but-injury-prone player gets a very small
// flat nudge instead, since there's no known absence, just history.
export const SHORT_ABSENCE_GAMES = 4;
function injuryPenalty(playerId: string): number {
  const info = INJURY_INFO[playerId];
  if (!info) return 0;
  if (info.risk === "long_out") return Math.max(0, info.gamesOut - SHORT_ABSENCE_GAMES) * 6;
  return 4;
}

export function effectiveRank(p: BoardPlayer): number {
  return p.overallRank + injuryPenalty(p.id);
}

export function byEffectiveRank(players: BoardPlayer[]): BoardPlayer[] {
  return [...players].sort((a, b) => effectiveRank(a) - effectiveRank(b));
}

function slotMatches(slot: StrategySlot, position: Position): boolean {
  if (slot === "BEST") return true;
  if (slot === "FLEX") return position === "RB" || position === "WR" || position === "TE";
  return slot === position;
}

// Roster slots already filled by "mine" picks, used to know what's still needed.
export function myPositionCounts(board: BoardPlayer[]): Partial<Record<Position, number>> {
  const counts: Partial<Record<Position, number>> = {};
  for (const p of board) {
    if (p.state === "mine") counts[p.position] = (counts[p.position] ?? 0) + 1;
  }
  return counts;
}

// How many "mine" picks share each bye week, so we can flag stacking too many byes together.
export function myByeCounts(board: BoardPlayer[]): Map<number, number> {
  const counts = new Map<number, number>();
  for (const p of board) {
    if (p.state !== "mine") continue;
    const bye = TEAM_CONTEXT[p.team]?.bye;
    if (bye == null) continue;
    counts.set(bye, (counts.get(bye) ?? 0) + 1);
  }
  return counts;
}

export interface TopByPositionEntry {
  label: string;
  player: BoardPlayer | null;
}

// Best available player at each position right now, independent of round/strategy — a
// quick "who's the best X left" reference regardless of what you're actually targeting.
export function topAvailableByPosition(board: BoardPlayer[]): TopByPositionEntry[] {
  const ranked = byEffectiveRank(board.filter((p) => p.state === "available"));
  const positions: Position[] = ["QB", "RB", "WR", "TE", "K", "DST"];
  const entries: TopByPositionEntry[] = positions.map((pos) => ({
    label: pos,
    player: ranked.find((p) => p.position === pos) ?? null,
  }));
  const flexPlayer = ranked.find((p) => p.position === "RB" || p.position === "WR" || p.position === "TE") ?? null;
  entries.splice(4, 0, { label: "FLEX", player: flexPlayer });
  return entries;
}

export interface RoundRecommendation {
  round: number;
  overallPick: number;
  desiredSlot: StrategySlot;
  primary: BoardPlayer | null;
  alternates: BoardPlayer[];
  scarcityWarning: string | null;
  byeWarning: string | null;
  injuryWarning: string | null;
}

// Projects every one of your remaining picks for the rest of the draft, not just the
// next one. Between your picks, the other teams' picks are simulated by assuming each
// takes the best player still on the board (a simple ADP/consensus-rank stand-in) — so
// by the time we project round 4, the players plausibly gone by rounds 1-3 (yours and
// everyone else's) are already removed from the pool instead of still showing up as
// available. That's what makes rounds 2+ actually different from round 1.
export function recommendAllRounds(board: BoardPlayer[], settings: DraftSettings): RoundRecommendation[] {
  const { teams, slot } = settings;
  const rounds = totalRounds(settings.roster);
  const totalPicks = rounds * teams;

  // We don't know which overall slot each real pick filled, only how many have happened —
  // that's enough to know which overall pick number comes next.
  const realTakenCount = board.filter((p) => p.state !== "available").length;

  const pool = board.filter((p) => p.state === "available").sort((a, b) => a.overallRank - b.overallRank);
  const simulatedTaken = new Set<string>();
  const myPlayers: BoardPlayer[] = board.filter((p) => p.state === "mine");

  function currentPool(): BoardPlayer[] {
    return pool.filter((p) => !simulatedTaken.has(p.id));
  }

  const results: RoundRecommendation[] = [];

  for (let overall = realTakenCount + 1; overall <= totalPicks; overall++) {
    const round = roundForOverallPick(overall, teams);
    const isMyPick = overall === overallPickForRound(round, slot, teams);
    const available = currentPool();
    const ranked = byEffectiveRank(available);

    if (!isMyPick) {
      const takenByOther = ranked[0];
      if (takenByOther) simulatedTaken.add(takenByOther.id);
      continue;
    }

    const desiredSlot = settings.strategy[round - 1] ?? "BEST";

    // "BEST" is pure value with no positional target, but a 2nd/3rd QB has near-zero
    // standalone value in a single-QB league once your starter is rostered — unlike RB/WR/TE,
    // which stay useful as bench/flex depth. So once the QB slot is filled, don't let a QB
    // outrank a genuinely useful RB/WR/TE just because it edges them on pure consensus rank.
    // An explicit strategy pick of "QB" for a round still overrides this — only the auto
    // "BEST" heuristic is affected.
    const myQBCount = myPlayers.filter((p) => p.position === "QB").length;
    const qbSaturated = desiredSlot === "BEST" && myQBCount >= settings.roster.QB;
    const candidates = qbSaturated && ranked.some((p) => p.position !== "QB") ? ranked.filter((p) => p.position !== "QB") : ranked;

    const matching = candidates.filter((p) => slotMatches(desiredSlot, p.position));
    const primary = matching[0] ?? candidates[0] ?? null;

    // Show every remaining player in the same tier as the pick first (so if there are still
    // 5 Tier-1 guys on the board, you see all 5, not just however many happen to fit in a
    // fixed top-N cut), then fill out to a reasonable total with the next-best players.
    const rest = candidates.filter((p) => p.id !== primary?.id);
    const sameTier = primary ? rest.filter((p) => p.tier === primary.tier) : [];
    const nextBest = primary ? rest.filter((p) => p.tier !== primary.tier) : rest;
    const alternates = [...sameTier, ...nextBest].slice(0, 14);

    let scarcityWarning: string | null = null;
    if (primary && desiredSlot !== "BEST") {
      const positionsToCheck: Position[] = desiredSlot === "FLEX" ? ["RB", "WR", "TE"] : [desiredSlot as Position];
      for (const pos of positionsToCheck) {
        const remainingInTier = available.filter((p) => p.position === pos && p.tier === primary.tier).length;
        if (remainingInTier <= 2) {
          scarcityWarning = `Only ${remainingInTier} Tier ${primary.tier} ${pos}${remainingInTier === 1 ? "" : "s"} left — this tier is about to run out.`;
          break;
        }
      }
    }

    let byeWarning: string | null = null;
    if (primary) {
      const bye = TEAM_CONTEXT[primary.team]?.bye;
      if (bye != null) {
        const existing = myPlayers.filter((p) => TEAM_CONTEXT[p.team]?.bye === bye).length;
        if (existing >= 2) {
          byeWarning = `You'd have ${existing + 1} players on bye in Week ${bye} — consider an alternate below.`;
        }
      }
    }

    let injuryWarning: string | null = null;
    if (primary) {
      const info = INJURY_INFO[primary.id];
      if (info?.risk === "long_out" && info.gamesOut > SHORT_ABSENCE_GAMES) {
        injuryWarning = `Expected to miss ~${info.gamesOut} games — ${info.note}`;
      } else if (info?.risk === "prone") {
        injuryWarning = `Injury history: ${info.note}`;
      }
    }

    if (primary) {
      simulatedTaken.add(primary.id);
      myPlayers.push(primary);
    }

    results.push({ round, overallPick: overall, desiredSlot, primary, alternates, scarcityWarning, byeWarning, injuryWarning });
  }

  return results;
}
