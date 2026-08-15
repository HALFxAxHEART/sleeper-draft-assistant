import type { Player, Position } from "../data/players";
import type { DraftSettings, PickState, StrategySlot } from "./types";
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

export function recommendForRound(
  board: BoardPlayer[],
  round: number,
  overallPick: number,
  settings: DraftSettings
): RoundRecommendation {
  const desiredSlot = settings.strategy[round - 1] ?? "BEST";
  const available = board.filter((p) => p.state === "available").sort((a, b) => a.overallRank - b.overallRank);

  const matching = available.filter((p) => slotMatches(desiredSlot, p.position));
  const primary = matching[0] ?? available[0] ?? null;
  const alternates = available.filter((p) => p.id !== primary?.id).slice(0, 5);

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
      const existing = myByeCounts(board).get(bye) ?? 0;
      if (existing >= 2) {
        byeWarning = `You'd have ${existing + 1} players on bye in Week ${bye} — consider an alternate below.`;
      }
    }
  }

  return { round, overallPick, desiredSlot, primary, alternates, scarcityWarning, byeWarning };
}
