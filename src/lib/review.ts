// Grades a completed (or in-progress) archived draft, pick by pick, for every team.
// Method: walk the real picks in actual order, tracking which skill-position players
// (QB/RB/WR/TE — K/DST are excluded, since reaching for one late is normal roster-building,
// not a mistake) are still on the board by our tier ranking. For each pick, "gap" = how many
// ranks worse the actual pick was than the single best skill player still available at that
// exact moment. A pick that gets you literally the best player left grades great; a pick that
// passes over several markedly better players grades as a reach, and we name who was open.
import type { ArchivedDraft, ArchivedPick } from "./archive";
import { PLAYERS } from "../data/players";

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
  rosterId: number;
  teamName: string;
  isMine: boolean;
  picks: PickGrade[];
  gradedCount: number;
  avgGap: number | null;
  grade: string;
}

const RANK_BY_ID = new Map(PLAYERS.map((p, i) => [p.id, { rank: i + 1, tier: p.tier, position: p.position, name: p.name }]));
const SKILL_POOL = PLAYERS.filter((p) => p.position !== "K" && p.position !== "DST");

function letterGrade(avgGap: number | null): string {
  if (avgGap == null) return "NA";
  if (avgGap <= 8) return "A";
  if (avgGap <= 16) return "B";
  if (avgGap <= 26) return "C";
  if (avgGap <= 36) return "D";
  return "F";
}

export function reviewDraft(archived: ArchivedDraft): TeamReview[] {
  const picks = [...archived.picks].sort((a, b) => a.overall - b.overall);
  const takenSkill = new Set<string>();
  const teams = new Map<number, TeamReview>();

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

    let label: PickLabel = "ungraded";
    let gap: number | null = null;
    let note = "Not in our ranked board — no grade available.";

    if (!isSkillPosition) {
      label = "solid";
      note = "Depth/streaming pick — not graded against the skill-position board.";
    } else if (info && bestAvailable) {
      gap = Math.max(0, info.rank - bestAvailable.rank);
      if (gap <= 4) {
        label = "best";
        note = gap === 0 ? "Took the best player on the board." : `Right there with the best available (${bestAvailable.name}, Tier ${bestAvailable.tier}).`;
      } else if (gap <= 14) {
        label = "solid";
        note = `Solid — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was arguably a touch better.`;
      } else if (gap <= 30) {
        label = "reach";
        note = `Reach — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was still on the board, better value.`;
      } else {
        label = "bad";
        note = `Big reach — ${bestAvailable.name} (Tier ${bestAvailable.tier}) was still available. That's a much stronger pick.`;
      }
    }

    const grade: PickGrade = { pick, rank: info?.rank ?? null, tier: info?.tier ?? null, bestAvailable, gap, label, note };

    if (!teams.has(pick.rosterId)) {
      teams.set(pick.rosterId, { rosterId: pick.rosterId, teamName: pick.teamName, isMine: pick.isMine, picks: [], gradedCount: 0, avgGap: null, grade: "—" });
    }
    teams.get(pick.rosterId)!.picks.push(grade);

    if (pick.playerId && isSkillPosition) takenSkill.add(pick.playerId);
  }

  const result = [...teams.values()];
  for (const team of result) {
    const graded = team.picks.filter((p) => p.gap != null);
    team.gradedCount = graded.length;
    team.avgGap = graded.length ? graded.reduce((sum, p) => sum + (p.gap ?? 0), 0) / graded.length : null;
    team.grade = letterGrade(team.avgGap);
  }
  return result.sort((a, b) => (a.isMine === b.isMine ? a.teamName.localeCompare(b.teamName) : a.isMine ? -1 : 1));
}
