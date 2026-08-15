import { useEffect, useRef } from "react";
import { PLAYERS } from "../data/players";
import { fetchDraft, fetchPicks, fetchUserId, parseDraftId, type SleeperPick } from "../lib/sleeper";
import { normalizeName } from "../lib/match";
import { useDraft } from "../state/draftStore";

const POLL_MS = 2000;
const DRAFT_META_EVERY = 5; // draft metadata (teams/slot) rarely changes mid-draft, so refresh it less often than picks

const NAME_INDEX = new Map<string, string>(); // normalized name (+DEF variant) -> player id
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
    let pollCount = 0;
    let lastTeams: number | undefined;

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
        }
        pollCount++;

        const picks = await fetchPicks(draftId);
        if (cancelled) return;

        const merged: Array<{ playerId: string; state: "picked" | "mine" }> = [];
        for (const pick of picks) {
          const playerId = matchPick(pick);
          if (!playerId) continue;
          const isMine =
            (myUserIdRef.current && pick.picked_by === myUserIdRef.current) ||
            (mySlotRef.current != null && pick.draft_slot === mySlotRef.current);
          merged.push({ playerId, state: isMine ? "mine" : "picked" });
        }

        dispatch({
          type: "SLEEPER_MERGE",
          picks: merged,
          teams: lastTeams,
          slot: mySlotRef.current ?? undefined,
        });
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
