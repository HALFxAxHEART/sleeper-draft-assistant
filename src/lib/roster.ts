import type { BoardPlayer } from "./recommend";
import type { RosterSlots } from "./types";
import type { GradeResult } from "./review";

export interface RosterSlot {
  key: string;
  label: string;
  position: string;
  player: BoardPlayer | null;
  grade: GradeResult | null;
}

function slotLabels(prefix: string, count: number): string[] {
  if (count <= 0) return [];
  if (count === 1) return [prefix];
  return Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`);
}

const isFlexEligible = (pos: string) => pos === "RB" || pos === "WR" || pos === "TE";
const isSuperflexEligible = (pos: string) => pos === "QB" || isFlexEligible(pos);

// Fills starter/bench slots in the order you actually drafted your players — exact position
// match first, then FLEX (RB/WR/TE), then SUPERFLEX (QB/RB/WR/TE) if the league has one, then
// BENCH, then IR as a last resort. Same greedy assignment any standard fantasy roster uses;
// it's not meant to be optimal, just what you'd see on Sleeper's own roster page. IR is tracked
// as its own bucket (not folded into BENCH) so the panel labels it correctly.
export function buildRosterSlots(
  board: BoardPlayer[],
  minePickOrder: string[],
  roster: RosterSlots,
  pickGrades: Record<string, GradeResult>,
): RosterSlot[] {
  const byId = new Map(board.map((p) => [p.id, p]));

  const slots: RosterSlot[] = [];
  const pushSlots = (prefix: string, count: number, position: string) => {
    for (const label of slotLabels(prefix, count)) {
      slots.push({ key: `${position}-${label}`, label, position, player: null, grade: null });
    }
  };
  pushSlots("QB", roster.QB, "QB");
  pushSlots("RB", roster.RB, "RB");
  pushSlots("WR", roster.WR, "WR");
  pushSlots("TE", roster.TE, "TE");
  pushSlots("FLEX", roster.FLEX, "FLEX");
  pushSlots("SFLEX", roster.SUPERFLEX, "SUPERFLEX");
  pushSlots("K", roster.K, "K");
  pushSlots("DST", roster.DST, "DST");
  pushSlots("BENCH", roster.BENCH, "BENCH");
  pushSlots("IR", roster.IR, "IR");

  for (const playerId of minePickOrder) {
    const player = byId.get(playerId);
    if (!player) continue;

    let slot = slots.find((s) => s.position === player.position && !s.player);
    if (!slot && isFlexEligible(player.position)) {
      slot = slots.find((s) => s.position === "FLEX" && !s.player);
    }
    if (!slot && isSuperflexEligible(player.position)) {
      slot = slots.find((s) => s.position === "SUPERFLEX" && !s.player);
    }
    if (!slot) {
      slot = slots.find((s) => s.position === "BENCH" && !s.player);
    }
    if (!slot) {
      slot = slots.find((s) => s.position === "IR" && !s.player);
    }
    if (slot) {
      slot.player = player;
      slot.grade = pickGrades[playerId] ?? null;
    }
  }

  return slots;
}
