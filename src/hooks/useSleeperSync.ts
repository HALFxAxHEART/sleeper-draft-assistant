import { useEffect, useRef } from "react";
import { PLAYERS } from "../data/players";
import {
  fetchDraft,
  fetchLeague,
  fetchLeagueRosters,
  fetchLeagueUsers,
  fetchPicks,
  fetchUserId,
  parseDraftId,
  type SleeperPick,
} from "../lib/sleeper";
import { normalizeName } from "../lib/match";
import { useDraft } from "../state/draftStore";
import { upsertDraft, type ArchivedPick } from "../lib/archive";

const POLL_MS = 2000;
const DRAFT_META_EVERY = 5; // draft metadata (teams/slot) rarely changes mid-draft, so refresh it less often than picks

const NAME_INDEX = new Map<string, string>(); // normalized name (+DEF variant) -> player id
const PLAYER_BY_ID = new Map(PLAYERS.map((p) => [p.id, p]));
for (const p of PLAYERS) {
  const key = p.position === "DST" ? normalizeName(p.name) : normalizeName(p.name);
  NAME_INDEX.set(key, p.id);
}

function matchPick(pick: SleeperPick): string | null {
  const first = pick.metadata?.first_name ?? "";
  const last = pick.metadata?.last_name ?? "";
  const full = normalizeName(`${first} ${last}`);
  return NAME_INDEX.get(full) ?? null;
}

export function useSleeperSync() {
  const { state, dispatch } = useDraft();
  const { sleeperDraftId, sleeperUsername } = state.settings;
  const myUserIdRef = useRef<string | null>(null);
  const mySlotRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sleeperDraftId) return;
    let cancelled = false;
    let userLookupDone = false;
    let leagueLookupDone = false;
    let pollCount = 0;
    let lastTeams: number | undefined;
    let teamNames = new Map<number, string>();
    let myRosterId: number | null = null;
    let draftMeta: { status: string; leagueId: string | null; season: string; name: string; teams: number } | null = null;

    async function poll() {
      dispatch({ type: "SLEEPER_STATUS", status: state.sleeperStatus === "connected" ? "connected" : "syncing" });
      try {
        const draftId = parseDraftId(sleeperDraftId);

        if (!userLookupDone && sleeperUsername) {
          userLookupDone = true;
          const uid = await fetchUserId(sleeperUsername);
          myUserIdRef.current = uid;
        }

        // Draft metadata (teams/slot order) rarely changes mid-draft — refresh it
        // less often than picks so pick-syncing itself can poll faster.
        if (pollCount % DRAFT_META_EVERY === 0 || mySlotRef.current == null) {
          const draft = await fetchDraft(draftId);
          if (myUserIdRef.current && draft.draft_order && draft.draft_order[myUserIdRef.current]) {
            mySlotRef.current = draft.draft_order[myUserIdRef.current];
          }
          lastTeams = draft.settings?.teams;
          draftMeta = {
            status: draft.status,
            leagueId: draft.league_id || null,
            season: draft.season || "",
            name: draft.metadata?.name || "",
            teams: draft.settings?.teams ?? 0,
          };

          // League/team names are effectively static for the life of a draft — look them
          // up once rather than on every refresh.
          if (!leagueLookupDone && draft.league_id) {
            leagueLookupDone = true;
            try {
              const [league, users, rosters] = await Promise.all([
                fetchLeague(draft.league_id),
                fetchLeagueUsers(draft.league_id),
                fetchLeagueRosters(draft.league_id),
              ]);
              if (league?.name) draftMeta.name = league.name;
              const nameByUser = new Map(users.map((u) => [u.user_id, u.metadata?.team_name || u.display_name || "Unnamed team"]));
              for (const r of rosters) {
                teamNames.set(r.roster_id, r.owner_id ? (nameByUser.get(r.owner_id) ?? `Team ${r.roster_id}`) : `Team ${r.roster_id}`);
                if (myUserIdRef.current && r.owner_id === myUserIdRef.current) myRosterId = r.roster_id;
              }
            } catch {
              // best-effort — team names just fall back to "Team N" and isMine falls back to slot-matching
            }
          }
        }
        pollCount++;

        const picks = await fetchPicks(draftId);
        if (cancelled) return;

        function isMinePick(pick: SleeperPick): boolean {
          if (myRosterId != null) return pick.roster_id === myRosterId;
          return (
            (!!myUserIdRef.current && pick.picked_by === myUserIdRef.current) ||
            (mySlotRef.current != null && pick.draft_slot === mySlotRef.current)
          );
        }

        const merged: Array<{ playerId: string; state: "picked" | "mine" }> = [];
        const archivedPicks: ArchivedPick[] = [];
        for (const pick of picks) {
          const playerId = matchPick(pick);
          const isMine = isMinePick(pick);
          if (playerId) merged.push({ playerId, state: isMine ? "mine" : "picked" });

          const first = pick.metadata?.first_name ?? "";
          const last = pick.metadata?.last_name ?? "";
          const matchedPlayer = playerId ? PLAYER_BY_ID.get(playerId) : undefined;
          archivedPicks.push({
            overall: pick.pick_no,
            round: pick.round,
            rosterId: pick.roster_id,
            teamName: teamNames.get(pick.roster_id) ?? `Team ${pick.draft_slot}`,
            isMine,
            playerId,
            playerName: matchedPlayer?.name ?? (`${first} ${last}`.trim() || "Unknown player"),
            position: matchedPlayer?.position ?? pick.metadata?.position ?? "?",
            nflTeam: matchedPlayer?.team ?? pick.metadata?.team ?? "?",
          });
        }

        dispatch({
          type: "SLEEPER_MERGE",
          picks: merged,
          teams: lastTeams,
          slot: mySlotRef.current ?? undefined,
        });

        if (draftMeta && archivedPicks.length > 0) {
          upsertDraft({
            draftId,
            name: draftMeta.name || `Draft ${draftId}`,
            season: draftMeta.season,
            status: draftMeta.status,
            teams: draftMeta.teams || lastTeams || 0,
            savedAt: Date.now(),
            picks: archivedPicks,
          });
        }
      } catch (err) {
        if (!cancelled) {
          dispatch({ type: "SLEEPER_STATUS", status: "error", error: err instanceof Error ? err.message : String(err) });
        }
      }
    }

    poll();
    const interval = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sleeperDraftId, sleeperUsername]);
}
