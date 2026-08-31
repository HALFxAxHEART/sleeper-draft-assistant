// Grades a completed (or in-progress) archived draft, pick by pick, for every team.
// Method: walk the real picks in actual order, tracking which skill-position players
// (QB/RB/WR/TE — K/DST are excluded, since reaching for one late is normal roster-building,
// not a mistake) are still on the board by our tier ranking. For each pick, "gap" = how many
// ranks worse the actual pick was than the single best skill player still available at that
// exact moment. A pick that gets you literally the best player left grades great; a pick that
// passes over several markedly better players grades as a reach, and we name who was open.
import type { ArchivedDraft, ArchivedPick } from "./archive";
import { PLAYERS } from "../data/players";
import { INJURY_INFO } from "../data/injuries";
import type { PickState } from "./types";

// Players who can't play a meaningful chunk of the season (season-ending injury, or the
// commissioner's-exempt/suspended list — anything out more than half the year) are NOT counted
// as "best available" when grading, so a team is never dinged for correctly passing on someone
// who can't help them. (They can still be graded as a reach if a team actually drafts one.)
function isRosterable(id: string): boolean {
  const inj = INJURY_INFO[id];
  return !(inj && inj.risk === "long_out" && inj.gamesOut > 8);
}

export type PickLabel = "best" | "solid" | "reach" | "bad" | "ungraded";

export interface PickGrade {
  pick: ArchivedPick;
  rank: number | null;
  tier: number | null;
  bestAvailable: { name: string; rank: number; tier: number; position: string } | null;
  gap: number | null;
  label: PickLabel;
  note: string;
}

export interface TeamReview {
  slot: number;
  teamName: string;
  isMine: boolean;
  picks: PickGrade[];
  gradedCount: number;
  avgGap: number | null;
  grade: string;
  rank: number | null; // 1 = best draft in the league by avg gap; null if nothing graded
  totalTeams: number;
}

const RANK_BY_ID = new Map(PLAYERS.map((p, i) => [p.id, { rank: i + 1, tier: p.tier, position: p.position, name: p.name }]));
const SKILL_POOL = PLAYERS.filter((p) => p.position !== "K" && p.position !== "DST" && isRosterable(p.id));

function letterGrade(avgGap: number | null): string {
  if (avgGap == null) return "NA";
  if (avgGap <= 8) return "A";
  if (avgGap <= 16) return "B";
  if (avgGap <= 26) return "C";
  if (avgGap <= 36) return "D";
  return "F";
}

export interface GradeResult {
  label: PickLabel;
  gap: number | null;
  note: string;
}

// How much the cross-position "best player on the whole board" gap counts. We grade a pick
// mostly on POSITIONAL value — the best player still available AT THE PICK'S OWN POSITION —
// because a drafter who skips a higher-ranked QB to take the best RB on the board usually did
// it on purpose (waiting on QB, front-loading RB). Grading that as a "reach" just because a QB
// outranked the RB is wrong. The overall-best-on-board gap still counts a little, so ignoring a
// vastly superior player isn't totally free, but it's deliberately a minor nudge — not the main
// signal. Bump this toward 1.0 to weight "best on the whole board" more; toward 0 to grade on
// pure positional value.
const OVERALL_GAP_WEIGHT = 0.25;

// Shared by reviewDraft (archived Sleeper-synced picks, graded after the fact) and
// gradeLivePick (your own manual picks, graded the instant you mark someone "mine") —
// same thresholds either way, so the two views never disagree. `bestAtPosition` is the best
// player still available at the pick's OWN position (the primary yardstick); `bestOverallRank`
// is the rank of the best skill player left anywhere (a light secondary nudge).
function gradeAgainstBest(
  isSkillPosition: boolean,
  rank: number | null,
  bestAtPosition: { name: string; rank: number; tier: number; position: string } | null,
  bestOverallRank: number | null,
): GradeResult {
  if (!isSkillPosition) {
    return { label: "solid", gap: null, note: "Depth/streaming pick — not graded against the skill-position board." };
  }
  if (rank == null || !bestAtPosition) {
    return { label: "ungraded", gap: null, note: "Not in our ranked board — no grade available." };
  }
  const pos = bestAtPosition.position;
  const positionalGap = Math.max(0, rank - bestAtPosition.rank);
  const overallGap = bestOverallRank != null ? Math.max(0, rank - bestOverallRank) : 0;
  const gap = Math.round(positionalGap + OVERALL_GAP_WEIGHT * overallGap);

  // Taking the best player left at your position is a fine pick by definition — never grade it
  // worse than "solid" no matter what other positions had on the board.
  if (positionalGap === 0) {
    const label: PickLabel = gap <= 4 ? "best" : "solid";
    return { label, gap, note: `Took the best ${pos} on the board.` };
  }
  if (gap <= 4) {
    return { label: "best", gap, note: `Great value — right there with the best ${pos} available (${bestAtPosition.name}, Tier ${bestAtPosition.tier}).` };
  }
  if (gap <= 14) {
    return { label: "solid", gap, note: `Solid — ${bestAtPosition.name} (Tier ${bestAtPosition.tier}) was a slightly better ${pos}.` };
  }
  if (gap <= 30) {
    return { label: "reach", gap, note: `Reach at ${pos} — ${bestAtPosition.name} (Tier ${bestAtPosition.tier}) was still on the board, better value.` };
  }
  return { label: "bad", gap, note: `Big reach at ${pos} — ${bestAtPosition.name} (Tier ${bestAtPosition.tier}) was still available, a much stronger pick.` };
}

// Grades one of YOUR picks the instant it happens, using the board state from just
// before this player was marked "mine" (so it reflects what was truly still available).
export function gradeLivePick(playerId: string, priorPickStates: Record<string, PickState>): GradeResult {
  const info = RANK_BY_ID.get(playerId);
  const isSkillPosition = info ? info.position !== "K" && info.position !== "DST" : true;

  let bestAtPosition: { name: string; rank: number; tier: number; position: string } | null = null;
  let bestOverallRank: number | null = null;
  if (isSkillPosition && info) {
    const isOpen = (id: string) => id !== playerId && (priorPickStates[id] ?? "available") === "available";
    const bestPos = SKILL_POOL.find((p) => p.position === info.position && isOpen(p.id));
    if (bestPos) {
      const bestInfo = RANK_BY_ID.get(bestPos.id)!;
      bestAtPosition = { name: bestPos.name, rank: bestInfo.rank, tier: bestInfo.tier, position: bestInfo.position };
    }
    const bestAny = SKILL_POOL.find((p) => isOpen(p.id));
    if (bestAny) bestOverallRank = RANK_BY_ID.get(bestAny.id)!.rank;
  }
  return gradeAgainstBest(isSkillPosition, info?.rank ?? null, bestAtPosition, bestOverallRank);
}

export function reviewDraft(archived: ArchivedDraft): TeamReview[] {
  const picks = [...archived.picks].sort((a, b) => a.overall - b.overall);
  const takenSkill = new Set<string>();
  const teams = new Map<number, TeamReview>(); // keyed by draft slot, not roster_id — see ArchivedPick.slot

  for (const pick of picks) {
    const info = pick.playerId ? RANK_BY_ID.get(pick.playerId) : undefined;
    const isSkillPosition = pick.position !== "K" && pick.position !== "DST";

    let bestAtPosition: PickGrade["bestAvailable"] = null;
    let bestOverallRank: number | null = null;
    if (isSkillPosition) {
      const bestPos = SKILL_POOL.find((p) => p.position === pick.position && !takenSkill.has(p.id));
      if (bestPos) {
        const bestInfo = RANK_BY_ID.get(bestPos.id)!;
        bestAtPosition = { name: bestPos.name, rank: bestInfo.rank, tier: bestPos.tier, position: bestPos.position };
      }
      const bestAny = SKILL_POOL.find((p) => !takenSkill.has(p.id));
      if (bestAny) bestOverallRank = RANK_BY_ID.get(bestAny.id)!.rank;
    }

    const { label, gap, note } = gradeAgainstBest(isSkillPosition, info?.rank ?? null, bestAtPosition, bestOverallRank);

    const grade: PickGrade = { pick, rank: info?.rank ?? null, tier: info?.tier ?? null, bestAvailable: bestAtPosition, gap, label, note };

    if (!teams.has(pick.slot)) {
      teams.set(pick.slot, {
        slot: pick.slot,
        teamName: pick.teamName,
        isMine: pick.isMine,
        picks: [],
        gradedCount: 0,
        avgGap: null,
        grade: "—",
        rank: null,
        totalTeams: 0,
      });
    }
    teams.get(pick.slot)!.picks.push(grade);

    if (pick.playerId && isSkillPosition) takenSkill.add(pick.playerId);
  }

  const result = [...teams.values()];
  for (const team of result) {
    const graded = team.picks.filter((p) => p.gap != null);
    team.gradedCount = graded.length;
    team.avgGap = graded.length ? graded.reduce((sum, p) => sum + (p.gap ?? 0), 0) / graded.length : null;
    team.grade = letterGrade(team.avgGap);
  }

  // Rank every team 1..N by avg gap (lower = drafted closer to best-available = better) —
  // mutates the same TeamReview objects held in `result`, so display order below is unaffected.
  const byGap = [...result].sort((a, b) => {
    if (a.avgGap == null && b.avgGap == null) return 0;
    if (a.avgGap == null) return 1;
    if (b.avgGap == null) return -1;
    return a.avgGap - b.avgGap;
  });
  byGap.forEach((team, i) => {
    team.rank = team.avgGap != null ? i + 1 : null;
    team.totalTeams = result.length;
  });

  return result.sort((a, b) => (a.isMine === b.isMine ? a.teamName.localeCompare(b.teamName) : a.isMine ? -1 : 1));
}
