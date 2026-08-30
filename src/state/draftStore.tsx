import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import { PLAYERS } from "../data/players";
import { defaultSettings, defaultStrategy, totalRounds, type DraftSettings, type PickState, type RosterSlots, type StrategySlot } from "../lib/types";
import { gradeLivePick, type GradeResult } from "../lib/review";

// Bumped v1 -> v2 for the 12-team / single-FLEX default change: discards any stale saved
// config (e.g. a 2-FLEX roster left over from the old team-count rule) so everyone loads the
// corrected defaults. Saved past-draft reviews live under a separate archive key, untouched.
const STORAGE_KEY = "sleeper-draft-assistant/v3";

interface State {
  settings: DraftSettings;
  pickStates: Record<string, PickState>;
  // Order you actually drafted your own players in — drives both the roster-slot view
  // (starters fill up in the order you took them) and live pick grading below.
  minePickOrder: string[];
  // Graded the instant a player is marked "mine", against whoever was still on the board
  // at that exact moment — same gap-to-best-available method as the post-draft review.
  pickGrades: Record<string, GradeResult>;
  // Personal watchlist, independent of the round-by-round recommendation — ranked, you
  // control the order. Drafting a queued player removes them automatically.
  queue: string[];
  sleeperStatus: "idle" | "syncing" | "error" | "connected";
  sleeperError: string | null;
  lastSyncedAt: number | null;
}

type Action =
  | { type: "SET_SETTINGS"; settings: Partial<DraftSettings> }
  | { type: "SET_ROSTER"; roster: RosterSlots }
  | { type: "SET_STRATEGY_SLOT"; round: number; slot: StrategySlot }
  | { type: "CYCLE_PICK"; playerId: string }
  | { type: "SET_PICK"; playerId: string; state: PickState }
  | { type: "RESET_PICKS" }
  | { type: "TOGGLE_QUEUE"; playerId: string }
  | { type: "SET_QUEUE"; queue: string[] }
  | { type: "SLEEPER_STATUS"; status: State["sleeperStatus"]; error?: string | null }
  | { type: "SLEEPER_MERGE"; picks: Array<{ playerId: string; state: PickState }>; teams?: number; slot?: number };

function load(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        settings: { ...defaultSettings(), ...parsed.settings },
        pickStates: parsed.pickStates ?? {},
        minePickOrder: parsed.minePickOrder ?? [],
        pickGrades: parsed.pickGrades ?? {},
        queue: parsed.queue ?? [],
        sleeperStatus: "idle",
        sleeperError: null,
        lastSyncedAt: null,
      };
    }
  } catch {
    // ignore corrupt storage
  }
  return {
    settings: defaultSettings(),
    pickStates: {},
    minePickOrder: [],
    pickGrades: {},
    queue: [],
    sleeperStatus: "idle",
    sleeperError: null,
    lastSyncedAt: null,
  };
}

// A player entering "mine" for the first time gets graded against the board as it stood
// a moment ago, joins the end of the draft order, and drops out of the queue (you got him).
// Re-entering "mine" while already "mine" (a redundant dispatch) is a no-op past pickStates.
function enterMine(state: State, playerId: string) {
  const wasMine = state.pickStates[playerId] === "mine";
  const pickStates = { ...state.pickStates, [playerId]: "mine" as PickState };
  if (wasMine) {
    return { pickStates, minePickOrder: state.minePickOrder, pickGrades: state.pickGrades, queue: state.queue };
  }
  const grade = gradeLivePick(playerId, state.pickStates);
  const minePickOrder = [...state.minePickOrder.filter((id) => id !== playerId), playerId];
  const pickGrades = { ...state.pickGrades, [playerId]: grade };
  const queue = state.queue.filter((id) => id !== playerId);
  return { pickStates, minePickOrder, pickGrades, queue };
}

function leaveMine(state: State, playerId: string, nextState: PickState) {
  const pickStates = { ...state.pickStates, [playerId]: nextState };
  const minePickOrder = state.minePickOrder.filter((id) => id !== playerId);
  const pickGrades = { ...state.pickGrades };
  delete pickGrades[playerId];
  return { pickStates, minePickOrder, pickGrades };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case "SET_ROSTER": {
      const rounds = totalRounds(action.roster);
      const strategy = defaultStrategy(rounds).map((s, i) => state.settings.strategy[i] ?? s);
      return { ...state, settings: { ...state.settings, roster: action.roster, strategy } };
    }
    case "SET_STRATEGY_SLOT": {
      const strategy = [...state.settings.strategy];
      strategy[action.round - 1] = action.slot;
      return { ...state, settings: { ...state.settings, strategy } };
    }
    case "CYCLE_PICK": {
      const current = state.pickStates[action.playerId] ?? "available";
      const next: PickState = current === "available" ? "picked" : current === "picked" ? "mine" : "available";
      if (next === "mine") return { ...state, ...enterMine(state, action.playerId) };
      if (current === "mine") return { ...state, ...leaveMine(state, action.playerId, next) };
      return { ...state, pickStates: { ...state.pickStates, [action.playerId]: next } };
    }
    case "SET_PICK": {
      const current = state.pickStates[action.playerId] ?? "available";
      if (action.state === "mine") return { ...state, ...enterMine(state, action.playerId) };
      if (current === "mine") return { ...state, ...leaveMine(state, action.playerId, action.state) };
      return { ...state, pickStates: { ...state.pickStates, [action.playerId]: action.state } };
    }
    case "RESET_PICKS":
      return { ...state, pickStates: {}, minePickOrder: [], pickGrades: {}, queue: [] };
    case "TOGGLE_QUEUE": {
      const inQueue = state.queue.includes(action.playerId);
      const queue = inQueue ? state.queue.filter((id) => id !== action.playerId) : [...state.queue, action.playerId];
      return { ...state, queue };
    }
    case "SET_QUEUE":
      return { ...state, queue: action.queue };
    case "SLEEPER_STATUS":
      return { ...state, sleeperStatus: action.status, sleeperError: action.error ?? null };
    case "SLEEPER_MERGE": {
      let pickStates = state.pickStates;
      let minePickOrder = state.minePickOrder;
      let pickGrades = state.pickGrades;
      let queue = state.queue;
      for (const { playerId, state: s } of action.picks) {
        const current = pickStates[playerId] ?? "available";
        if (s === "mine" && current !== "mine") {
          ({ pickStates, minePickOrder, pickGrades, queue } = enterMine({ ...state, pickStates, minePickOrder, pickGrades, queue }, playerId));
        } else if (s !== "mine" && current === "mine") {
          const left = leaveMine({ ...state, pickStates, minePickOrder, pickGrades }, playerId, s);
          pickStates = left.pickStates;
          minePickOrder = left.minePickOrder;
          pickGrades = left.pickGrades;
        } else {
          pickStates = { ...pickStates, [playerId]: s };
        }
      }
      const settings = { ...state.settings };
      if (action.teams && action.teams !== settings.teams) settings.teams = action.teams;
      if (action.slot && action.slot !== settings.slot) settings.slot = action.slot;
      return { ...state, pickStates, minePickOrder, pickGrades, queue, settings, sleeperStatus: "connected", sleeperError: null, lastSyncedAt: Date.now() };
    }
    default:
      return state;
  }
}

interface Ctx {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const DraftContext = createContext<Ctx | null>(null);

export function DraftProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    const toSave = {
      settings: state.settings,
      pickStates: state.pickStates,
      minePickOrder: state.minePickOrder,
      pickGrades: state.pickGrades,
      queue: state.queue,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.settings, state.pickStates, state.minePickOrder, state.pickGrades, state.queue]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <DraftContext.Provider value={value}>{children}</DraftContext.Provider>;
}

export function useDraft() {
  const ctx = useContext(DraftContext);
  if (!ctx) throw new Error("useDraft must be used inside DraftProvider");
  return ctx;
}

export function playerCount() {
  return PLAYERS.length;
}
