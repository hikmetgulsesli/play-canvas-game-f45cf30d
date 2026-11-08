export const GAME_STATE_REFS = {
  gamePhase: "STATE_GAME_PHASE",
  persistedHighScore: "STATE_PERSISTED_HIGH_SCORE",
  score: "STATE_SCORE",
} as const;

export type GamePhase = "idle" | "playing";

export interface GameRuntimeState {
  gamePhase: GamePhase;
  score: number;
  persistedHighScore: number | null;
}

export interface GameStateMap {
  STATE_GAME_PHASE: GamePhase;
  STATE_PERSISTED_HIGH_SCORE: number | null;
  STATE_SCORE: number;
}

export interface StartGameOutcome {
  actionRef: "ACT_START_GAME";
  ok: boolean;
  state: GameStateMap;
}

export const HIGH_SCORE_STORAGE_KEY = "setfarm.play_canvas_game.high_score_storage.v1";
export const START_GAME_ACTION_REF = "ACT_START_GAME";
export const START_GAME_CONTROL_SLOT_REF = "CSLOT_START_GAME_START_BUTTON";
export const GAME_STARTED_STATUS_MESSAGE = "Game started";
export const GAME_IDLE_STATUS_MESSAGE = "Ready to start";
