const BASE = "https://api.sleeper.app/v1";

export interface SleeperDraft {
  draft_id: string;
  type: string;
  status: string;
  settings: { teams: number; rounds: number };
  draft_order: Record<string, number> | null; // user_id -> slot (1-indexed)
  slot_to_roster_id?: Record<string, number>;
}

export interface SleeperPick {
  pick_no: number;
  round: number;
  draft_slot: number;
  picked_by: string; // user_id, "" for autodrafted-without-owner in some cases
  roster_id: number;
  metadata: {
    first_name?: string;
    last_name?: string;
    position?: string;
    team?: string;
  };
}

export function parseDraftId(input: string): string {
  const trimmed = input.trim();
  const match = trimmed.match(/draft\/nfl\/(\d+)/) ?? trimmed.match(/draft\/(\d+)/);
  if (match) return match[1];
  return trimmed.replace(/\D/g, "") || trimmed;
}

export async function fetchDraft(draftId: string): Promise<SleeperDraft> {
  const res = await fetch(`${BASE}/draft/${draftId}`);
  if (!res.ok) throw new Error(`Sleeper draft lookup failed (${res.status})`);
  return res.json();
}

export async function fetchPicks(draftId: string): Promise<SleeperPick[]> {
  const res = await fetch(`${BASE}/draft/${draftId}/picks`);
  if (!res.ok) throw new Error(`Sleeper picks lookup failed (${res.status})`);
  return res.json();
}

export async function fetchUserId(username: string): Promise<string | null> {
  const res = await fetch(`${BASE}/user/${encodeURIComponent(username)}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data?.user_id ?? null;
}
