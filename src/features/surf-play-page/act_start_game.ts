import { applyStartGame, getGameStateMap } from "../../game/game-runtime";
import {
  START_GAME_ACTION_REF,
  type GameStateMap,
  type StartGameOutcome,
} from "../prod-play-canvas-game/prod-play-canvas-game.types";

/**
 * Implementation of the ACT_START_GAME semantic component.
 * Trigger: user (rendered control CSLOT_START_GAME_START_BUTTON).
 */
export function actStartGame(): StartGameOutcome {
  const state: GameStateMap = applyStartGame();
  return {
    actionRef: START_GAME_ACTION_REF,
    ok: true,
    state,
  };
}

export function actStartGameState(): GameStateMap {
  return getGameStateMap();
}
