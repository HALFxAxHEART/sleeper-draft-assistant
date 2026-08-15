import type { Player, Position } from "../data/players";
import type { DraftSettings, PickState, StrategySlot } from "./types";
import { overallPickForRound, roundForOverallPick, totalRounds } from "./types";
import { TEAM_CONTEXT } from "../data/teams";

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

export interface RoundRecommendation {
  round: number;
  overallPick: number;
  desiredSlot: StrategySlot;
  primary: BoardPlayer | null;
  alternates: BoardPlayer[];
  scarcityWarning: string | null;
  byeWarning: string | null;
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

    if (!isMyPick) {
      const takenByOther = available[0];
      if (takenByOther) simulatedTaken.add(takenByOther.id);
      continue;
    }

    const desiredSlot = settings.strategy[round - 1] ?? "BEST";
    const matching = available.filter((p) => slotMatches(desiredSlot, p.position));
    const primary = matching[0] ?? available[0] ?? null;
    const alternates = available.filter((p) => p.id !== primary?.id).slice(0, 9);

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

    if (primary) {
      simulatedTaken.add(primary.id);
      myPlayers.push(primary);
    }

    results.push({ round, overallPick: overall, desiredSlot, primary, alternates, scarcityWarning, byeWarning });
  }

  return results;
}
