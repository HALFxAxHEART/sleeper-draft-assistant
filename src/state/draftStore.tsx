import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import { PLAYERS } from "../data/players";
import { defaultSettings, defaultStrategy, totalRounds, type DraftSettings, type PickState, type RosterSlots, type StrategySlot } from "../lib/types";

const STORAGE_KEY = "sleeper-draft-assistant/v1";

interface State {
  settings: DraftSettings;
  pickStates: Record<string, PickState>;
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
    sleeperStatus: "idle",
    sleeperError: null,
    lastSyncedAt: null,
  };
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
      return { ...state, pickStates: { ...state.pickStates, [action.playerId]: next } };
    }
    case "SET_PICK":
      return { ...state, pickStates: { ...state.pickStates, [action.playerId]: action.state } };
    case "RESET_PICKS":
      return { ...state, pickStates: {} };
    case "SLEEPER_STATUS":
      return { ...state, sleeperStatus: action.status, sleeperError: action.error ?? null };
    case "SLEEPER_MERGE": {
      const pickStates = { ...state.pickStates };
      for (const { playerId, state: s } of action.picks) pickStates[playerId] = s;
      const settings = { ...state.settings };
      if (action.teams && action.teams !== settings.teams) settings.teams = action.teams;
      if (action.slot && action.slot !== settings.slot) settings.slot = action.slot;
      return { ...state, pickStates, settings, sleeperStatus: "connected", sleeperError: null, lastSyncedAt: Date.now() };
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
    const toSave = { settings: state.settings, pickStates: state.pickStates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.settings, state.pickStates]);

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
