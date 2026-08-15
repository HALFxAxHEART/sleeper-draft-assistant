import type { Position } from "../data/players";

export type PickState = "available" | "picked" | "mine";

export interface RosterSlots {
  QB: number;
  RB: number;
  WR: number;
  TE: number;
  FLEX: number;
  K: number;
  DST: number;
  BENCH: number;
}

export const DEFAULT_ROSTER: RosterSlots = {
  QB: 1,
  RB: 2,
  WR: 2,
  TE: 1,
  FLEX: 1,
  K: 1,
  DST: 1,
  BENCH: 6,
};

export type StrategySlot = Position | "FLEX" | "BEST";

export interface DraftSettings {
  teams: number;
  slot: number; // 1-indexed draft position
  roster: RosterSlots;
  scoring: "PPR" | "Half PPR" | "Standard";
  strategy: StrategySlot[]; // one entry per round, length == totalRounds()
  sleeperDraftId: string;
  sleeperUsername: string;
}

export function totalRounds(roster: RosterSlots): number {
  return (
    roster.QB + roster.RB + roster.WR + roster.TE + roster.FLEX + roster.K + roster.DST + roster.BENCH
  );
}

const DEFAULT_STRATEGY_CYCLE: StrategySlot[] = [
  "RB",
  "WR",
  "RB",
  "WR",
  "WR",
  "TE",
  "QB",
  "RB",
  "FLEX",
  "QB",
  "TE",
  "BEST",
  "K",
  "DST",
];

export function defaultStrategy(rounds: number): StrategySlot[] {
  const out: StrategySlot[] = [];
  for (let i = 0; i < rounds; i++) {
    out.push(DEFAULT_STRATEGY_CYCLE[i] ?? "BEST");
  }
  return out;
}

export function defaultSettings(): DraftSettings {
  const roster = DEFAULT_ROSTER;
  return {
    teams: 8,
    slot: 1,
    roster,
    scoring: "PPR",
    strategy: defaultStrategy(totalRounds(roster)),
    sleeperDraftId: "",
    sleeperUsername: "",
  };
}

// Snake-draft overall pick number for a given round (1-indexed).
export function overallPickForRound(round: number, slot: number, teams: number): number {
  const pickInRound = round % 2 === 1 ? slot : teams + 1 - slot;
  return (round - 1) * teams + pickInRound;
}

export function roundForOverallPick(overallPick: number, teams: number): number {
  return Math.ceil(overallPick / teams);
}
