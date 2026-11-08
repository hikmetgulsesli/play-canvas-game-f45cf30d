import {
  readPersistedHighScore,
  writePersistedHighScore,
} from "../features/prod-play-canvas-game/prod-play-canvas-game.repo";
import type { GameRuntimeState, GameStateMap } from "../features/prod-play-canvas-game/prod-play-canvas-game.types";

let snapshot: GameRuntimeState = {
  gamePhase: "idle",
  score: 0,
  persistedHighScore: readPersistedHighScore(),
};

const listeners = new Set<() => void>();

export function getGameState(): GameRuntimeState {
  return snapshot;
}

export function getGameStateMap(): GameStateMap {
  return {
    STATE_GAME_PHASE: snapshot.gamePhase,
    STATE_PERSISTED_HIGH_SCORE: snapshot.persistedHighScore,
    STATE_SCORE: snapshot.score,
  };
}

export function subscribeGameState(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setGameState(next: Partial<GameRuntimeState>): void {
  snapshot = { ...snapshot, ...next };
  listeners.forEach((listener) => listener());
}

/**
 * ACT_START_GAME state deltas:
 *   STATE_GAME_PHASE          -> "playing"
 *   STATE_SCORE               -> 0
 *   STATE_PERSISTED_HIGH_SCORE-> 0
 * followed by the PERSIST_HIGH_SCORE_STORAGE write of the persisted high score.
 */
export function applyStartGame(): GameStateMap {
  const persistedHighScore = 0;
  writePersistedHighScore(persistedHighScore);
  setGameState({
    gamePhase: "playing",
    score: 0,
    persistedHighScore,
  });
  return getGameStateMap();
}
