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

// Single FLEX is the standard Sleeper redraft default (Michel's 12-man league included), so
// changing team count never forces a second FLEX. Leagues that actually run two FLEX spots
// set the FLEX field manually in Settings (and the "doubles" toggle still doubles it).
export function flexForTeams(_teams: number): number {
  return 1;
}

export type StrategySlot = Position | "FLEX" | "BEST";

export interface DraftSettings {
  teams: number;
  slot: number; // 1-indexed draft position
  roster: RosterSlots;
  doubles: boolean; // 2 managers sharing one team -> every roster slot doubled
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

export function scaleRoster(roster: RosterSlots, factor: number): RosterSlots {
  const out = { ...roster };
  for (const key of Object.keys(out) as (keyof RosterSlots)[]) {
    out[key] = Math.max(0, Math.round(out[key] * factor));
  }
  return out;
}

const DEFAULT_STRATEGY_CYCLE: StrategySlot[] = [
  "RB",
  "WR",
  "RB",
  "WR",
  "WR",
  "TE",
  "BEST", // QB only if it's the best value left, not forced
  "RB",
  "FLEX",
  "BEST", // same — QB competes on value here too
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
    // Michel's league is a 10-team, single-FLEX redraft; teams/slot auto-correct to whatever
    // the Sleeper draft reports once he connects, so this is just a sensible starting point.
    teams: 10,
    slot: 1,
    roster,
    doubles: false,
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
