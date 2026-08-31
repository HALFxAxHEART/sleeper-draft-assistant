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

// Shared by reviewDraft (archived Sleeper-synced picks, graded after the fact) and
// gradeLivePick (your own manual picks, graded the instant you mark someone "mine") —
// same gap-to-best-available thresholds either way, so the two views never disagree.
function gradeAgainstBest(
  isSkillPosition: boolean,
  rank: number | null,
  bestAvailable: { name: string; rank: number; tier: number } | null,
): GradeResult {
  if (!isSkillPosition) {
    return { label: "solid", gap: null, note: "Depth/streaming pick — not graded against the skill-position board." };
  }
  if (rank == null || !bestAvailable) {
    return { label: "ungraded", gap: null, note: "Not in our ranked board — no grade available." };
  }
  const gap = Math.max(0, rank - bestAvailable.rank);
  if (gap <= 4) {
    return {
      label: "best",
      gap,
      note: gap === 0 ? "Took the best player on the board." : `Right there with the best available (${bestAvailable.name}, Tier ${bestAvailable.tier}).`,
    };
  }
  if (gap <= 14) {
    return { label: "solid", gap, note: `Solid — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was arguably a touch better.` };
  }
  if (gap <= 30) {
    return { label: "reach", gap, note: `Reach — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was still on the board, better value.` };
  }
  return { label: "bad", gap, note: `Big reach — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was still available. That's a much stronger pick.` };
}

// Grades one of YOUR picks the instant it happens, using the board state from just
// before this player was marked "mine" (so it reflects what was truly still available).
export function gradeLivePick(playerId: string, priorPickStates: Record<string, PickState>): GradeResult {
  const info = RANK_BY_ID.get(playerId);
  const isSkillPosition = info ? info.position !== "K" && info.position !== "DST" : true;

  let bestAvailable: { name: string; rank: number; tier: number } | null = null;
  if (isSkillPosition) {
    const best = SKILL_POOL.find((p) => p.id !== playerId && (priorPickStates[p.id] ?? "available") === "available");
    if (best) {
      const bestInfo = RANK_BY_ID.get(best.id)!;
      bestAvailable = { name: best.name, rank: bestInfo.rank, tier: bestInfo.tier };
    }
  }
  return gradeAgainstBest(isSkillPosition, info?.rank ?? null, bestAvailable);
}

export function reviewDraft(archived: ArchivedDraft): TeamReview[] {
  const picks = [...archived.picks].sort((a, b) => a.overall - b.overall);
  const takenSkill = new Set<string>();
  const teams = new Map<number, TeamReview>(); // keyed by draft slot, not roster_id — see ArchivedPick.slot

  for (const pick of picks) {
    const info = pick.playerId ? RANK_BY_ID.get(pick.playerId) : undefined;
    const isSkillPosition = pick.position !== "K" && pick.position !== "DST";

    let bestAvailable: PickGrade["bestAvailable"] = null;
    if (isSkillPosition) {
      const best = SKILL_POOL.find((p) => !takenSkill.has(p.id));
      if (best) {
        const bestInfo = RANK_BY_ID.get(best.id)!;
        bestAvailable = { name: best.name, rank: bestInfo.rank, tier: best.tier, position: best.position };
      }
    }

    const { label, gap, note } = gradeAgainstBest(isSkillPosition, info?.rank ?? null, bestAvailable);

    const grade: PickGrade = { pick, rank: info?.rank ?? null, tier: info?.tier ?? null, bestAvailable, gap, label, note };

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
