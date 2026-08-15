// Saved drafts, persisted to localStorage so a draft (live-synced from Sleeper) can be
// reviewed later — even after the Sleeper draft itself is long over. Keyed by Sleeper
// draft id so re-syncing the same draft just keeps updating the same saved entry.
export interface ArchivedPick {
  overall: number;
  round: number;
  rosterId: number;
  teamName: string;
  isMine: boolean;
  playerId: string | null; // our internal player id, if we could match the Sleeper pick to our board
  playerName: string;
  position: string;
  nflTeam: string;
}

export interface ArchivedDraft {
  draftId: string;
  name: string;
  season: string;
  status: string; // Sleeper draft status: "pre_draft" | "drafting" | "paused" | "complete"
  teams: number;
  savedAt: number;
  picks: ArchivedPick[];
}

const KEY = "sleeper-draft-assistant/archive/v1";

export function loadArchive(): ArchivedDraft[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveArchive(list: ArchivedDraft[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function upsertDraft(draft: ArchivedDraft) {
  const list = loadArchive();
  const idx = list.findIndex((d) => d.draftId === draft.draftId);
  if (idx >= 0) list[idx] = draft;
  else list.unshift(draft);
  saveArchive(list);
}

export function removeDraft(draftId: string) {
  saveArchive(loadArchive().filter((d) => d.draftId !== draftId));
}
