import type { Position } from "../data/players";

export type PickState = "available" | "picked" | "mine";

export interface RosterSlots {
  QB: number;
  RB: number;
  WR: number;
  TE: number;
  FLEX: number; // RB/WR/TE only
  SUPERFLEX: number; // QB/RB/WR/TE — a real "superflex" slot, not just extra FLEX
  K: number;
  DST: number;
  BENCH: number;
  IR: number; // reserve slots — tracked separately from BENCH so the roster panel labels them correctly
}

export const DEFAULT_ROSTER: RosterSlots = {
  QB: 1,
  RB: 2,
  WR: 2,
  TE: 1,
  FLEX: 2, // Michel's league runs 2 FLEX (16-round rosters)
  SUPERFLEX: 0,
  K: 1,
  DST: 1,
  BENCH: 6,
  IR: 0,
};

// FLEX count is a league setting the user controls (Michel's league runs 2), NOT something
// derived from team count — changing the number of teams never touches FLEX anymore. Kept for
// backwards compat / any caller that still wants a default; returns the roster default.
export function flexForTeams(_teams: number): number {
  return DEFAULT_ROSTER.FLEX;
}

export type StrategySlot = Position | "FLEX" | "SUPERFLEX" | "BEST";

export interface DraftSettings {
  teams: number;
  slot: number; // 1-indexed draft position
  roster: RosterSlots;
  doubles: boolean; // 2 managers sharing one team -> every roster slot doubled
  scoring: "PPR" | "Half PPR" | "Standard";
  // Extra points per TE reception, auto-detected from a synced league's real scoring_settings
  // (Sleeper's `bonus_rec_te`). 0 = no TE premium. Drives the TE ranking bonus dynamically —
  // not hardcoded to any one league's rules.
  teReceptionBonus: number;
  // Points per reception (Sleeper's `rec`), auto-detected the same way. Our board's own
  // consensus order assumes full PPR (1), so this only shifts rankings when a synced league
  // actually differs — half-PPR (0.5) or standard (0) both take real value off target-heavy
  // players relative to bell-cow rushers.
  pprValue: number;
  strategy: StrategySlot[]; // one entry per round, length == totalRounds()
  sleeperDraftId: string;
  sleeperUsername: string;
}

export function totalRounds(roster: RosterSlots): number {
  return (
    roster.QB +
    roster.RB +
    roster.WR +
    roster.TE +
    roster.FLEX +
    roster.SUPERFLEX +
    roster.K +
    roster.DST +
    roster.BENCH +
    roster.IR
  );
}

// Sleeper's own roster_positions codes -> our RosterSlots, so a synced league's real roster
// shape (including IR count and a genuine superflex slot) replaces our guessed default instead
// of everything extra getting lumped into BENCH.
export function parseSleeperRosterPositions(positions: string[]): RosterSlots {
  const roster: RosterSlots = { QB: 0, RB: 0, WR: 0, TE: 0, FLEX: 0, SUPERFLEX: 0, K: 0, DST: 0, BENCH: 0, IR: 0 };
  for (const pos of positions) {
    switch (pos) {
      case "QB":
        roster.QB++;
        break;
      case "RB":
        roster.RB++;
        break;
      case "WR":
        roster.WR++;
        break;
      case "TE":
        roster.TE++;
        break;
      case "FLEX":
      case "WRRB_FLEX":
      case "REC_FLEX":
        roster.FLEX++;
        break;
      case "SUPER_FLEX":
        roster.SUPERFLEX++;
        break;
      case "K":
        roster.K++;
        break;
      case "DEF":
        roster.DST++;
        break;
      case "BN":
        roster.BENCH++;
        break;
      case "IR":
        roster.IR++;
        break;
      default:
        break; // unrecognized/exotic position code (e.g. a taxi-squad marker) — skip silently
    }
  }
  return roster;
}

export function scaleRoster(roster: RosterSlots, factor: number): RosterSlots {
  const out = { ...roster };
  for (const key of Object.keys(out) as (keyof RosterSlots)[]) {
    out[key] = Math.max(0, Math.round(out[key] * factor));
  }
  return out;
}

// Default is pure best-player-available for every round — no round is pre-committed to a
// position. The user can still override any individual round to a specific position/FLEX/
// SUPERFLEX in Settings, but nothing is forced by default.
export function defaultStrategy(rounds: number): StrategySlot[] {
  return Array.from({ length: rounds }, () => "BEST");
}

export function defaultSettings(): DraftSettings {
  // Tonight's draft is a "doubles" league (2 managers per team, every roster slot doubled) —
  // defaulting it on so the roster/round count is right from a fresh load.
  const doubles = true;
  const roster = doubles ? scaleRoster(DEFAULT_ROSTER, 2) : DEFAULT_ROSTER;
  return {
    // Michel's league is an 8-team, 2-FLEX redraft and he drafts 8th; teams/slot auto-correct
    // to whatever the Sleeper draft reports once he connects, so this is just the starting point.
    teams: 8,
    slot: 8,
    roster,
    doubles,
    scoring: "PPR",
    // Matches tonight's known league scoring as a starting point — auto-corrects to whatever
    // a synced league's real scoring_settings say (including 0, for a league with no premium).
    teReceptionBonus: 1,
    pprValue: 1, // full PPR, matching tonight's league and our board's own assumed baseline
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
