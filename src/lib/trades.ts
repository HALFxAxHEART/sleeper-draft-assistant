// Post-draft trade finder. Looks at YOUR roster vs every other team's and proposes fair
// 1-for-1 swaps that trade from a position you're deep at to fill a position you're thin at —
// and that ALSO help the partner (they're deep where you're thin and thin where you're deep),
// so it's a realistic win-win offer, not a fleece. Only works on a fully-synced draft where
// every team's picks are known (i.e. a live Sleeper draft), since it needs the other rosters.
import type { ArchivedDraft } from "./archive";
import { PLAYERS } from "../data/players";
import { INJURY_INFO } from "../data/injuries";

type SkillPos = "QB" | "RB" | "WR" | "TE";
const SKILL: SkillPos[] = ["QB", "RB", "WR", "TE"];

// How many of each position a competitive roster wants (starters + FLEX share + a little
// bench) in a standard 1-QB, 2-FLEX league. Above this you have tradeable surplus; below it
// you have a need.
const TARGET_DEPTH: Record<SkillPos, number> = { QB: 2, RB: 5, WR: 5, TE: 2 };
// Starters you must protect — never offered away in a trade (only depth beyond this is dealt).
const STARTERS: Record<SkillPos, number> = { QB: 1, RB: 2, WR: 2, TE: 1 };

const RANK_BY_ID = new Map(PLAYERS.map((p, i) => [p.id, { rank: i + 1, tier: p.tier, position: p.position as SkillPos, name: p.name }]));

// Draft value from overall rank — steep at the top so a fair swap pairs comparable players.
function value(rank: number): number {
  return Math.max(0, 250 - rank);
}
function playable(id: string): boolean {
  const inj = INJURY_INFO[id];
  return !(inj && inj.risk === "long_out" && inj.gamesOut > 8);
}

interface RosterPlayer {
  id: string;
  name: string;
  position: SkillPos;
  rank: number;
  tier: number;
}
interface Team {
  slot: number;
  name: string;
  isMine: boolean;
  byPos: Record<SkillPos, RosterPlayer[]>; // each sorted best-first
  count: Record<SkillPos, number>;
}

export interface TradeSuggestion {
  give: RosterPlayer;
  get: RosterPlayer;
  partnerSlot: number;
  partnerName: string;
  rationale: string;
}

function buildTeams(archived: ArchivedDraft): Team[] {
  const bySlot = new Map<number, Team>();
  for (const pick of archived.picks) {
    if (!pick.playerId) continue;
    const info = RANK_BY_ID.get(pick.playerId);
    if (!info || !SKILL.includes(info.position)) continue; // skill only; K/DST not traded here
    if (!playable(pick.playerId)) continue; // don't build trades around can't-play players
    if (!bySlot.has(pick.slot)) {
      bySlot.set(pick.slot, {
        slot: pick.slot,
        name: pick.teamName,
        isMine: pick.isMine,
        byPos: { QB: [], RB: [], WR: [], TE: [] },
        count: { QB: 0, RB: 0, WR: 0, TE: 0 },
      });
    }
    const t = bySlot.get(pick.slot)!;
    t.byPos[info.position].push({ id: pick.playerId, name: info.name, position: info.position, rank: info.rank, tier: info.tier });
    t.count[info.position]++;
  }
  for (const t of bySlot.values()) for (const pos of SKILL) t.byPos[pos].sort((a, b) => a.rank - b.rank);
  return [...bySlot.values()];
}

function need(t: Team, pos: SkillPos): number {
  return TARGET_DEPTH[pos] - t.count[pos]; // >0 need, <0 surplus
}
// Players a team could part with — depth beyond its protected starters, worst-first.
function expendable(t: Team, pos: SkillPos): RosterPlayer[] {
  return t.byPos[pos].slice(STARTERS[pos]).reverse(); // worst-first, so we offer the least-costly depth
}

export function suggestTrades(archived: ArchivedDraft, maxSuggestions = 5): TradeSuggestion[] {
  const teams = buildTeams(archived);
  const me = teams.find((t) => t.isMine);
  if (!me || teams.length < 2) return [];

  const myNeeds = SKILL.filter((p) => need(me, p) > 0).sort((a, b) => need(me, b) - need(me, a));
  const mySurplus = SKILL.filter((p) => need(me, p) < 0).sort((a, b) => need(me, a) - need(me, b));
  if (myNeeds.length === 0 || mySurplus.length === 0) return [];

  const out: TradeSuggestion[] = [];
  const usedGet = new Set<string>();
  const usedGive = new Set<string>();

  for (const N of myNeeds) {
    for (const S of mySurplus) {
      for (const t of teams) {
        if (t.isMine) continue;
        // partner must be deep at my need N and thin at my surplus S
        if (need(t, N) >= 0) continue; // they aren't surplus at N
        if (need(t, S) <= 0) continue; // they don't need S
        const theirDepthAtN = expendable(t, N); // players they can give me (best of these helps me most)
        const myDepthAtS = expendable(me, S); // players I can give them
        if (!theirDepthAtN.length || !myDepthAtS.length) continue;

        // Their best expendable at N (most valuable surplus — best upgrade for me)
        const getP = [...theirDepthAtN].sort((a, b) => a.rank - b.rank)[0];
        if (usedGet.has(getP.id)) continue;
        // Match with my expendable S closest in value (fair to them)
        let giveP: RosterPlayer | null = null;
        let bestDiff = Infinity;
        for (const cand of myDepthAtS) {
          if (usedGive.has(cand.id)) continue;
          const d = Math.abs(value(cand.rank) - value(getP.rank));
          if (d < bestDiff) { bestDiff = d; giveP = cand; }
        }
        if (!giveP) continue;
        // Fairness: values within ~30 pts (~1.5 rounds). Otherwise the partner wouldn't accept.
        if (bestDiff > 30) continue;

        usedGet.add(getP.id);
        usedGive.add(giveP.id);
        out.push({
          give: giveP,
          get: getP,
          partnerSlot: t.slot,
          partnerName: t.name,
          rationale: `You're deep at ${S} (${me.count[S]}) and thin at ${N} (${me.count[N]}); ${t.name} is the opposite — a fair swap that upgrades both starting lineups.`,
        });
        if (out.length >= maxSuggestions) return out;
      }
    }
  }
  return out;
}
