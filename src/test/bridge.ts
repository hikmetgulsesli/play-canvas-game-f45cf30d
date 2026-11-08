import { actStartGame } from "../features/surf-play-page/act_start_game";
import { getGameStateMap } from "../game/game-runtime";
import { START_GAME_ACTION_REF, type GameStateMap } from "../features/prod-play-canvas-game/prod-play-canvas-game.types";

export interface SetfarmActionInvocationResult {
  ok: boolean;
  actionRef: string;
  state: GameStateMap;
}

export interface SetfarmTestBridge {
  invokeAction(actionRef: string, payload?: unknown): SetfarmActionInvocationResult;
  getState(): GameStateMap;
  readonly states: GameStateMap;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

/**
 * Exposes the bound runtime state and the ACT_START_GAME invocation entry point
 * to the owned evidence harness. State is read from the live application runtime.
 */
export function installSetfarmTestBridge(): SetfarmTestBridge {
  const bridge: SetfarmTestBridge = {
    invokeAction(actionRef: string): SetfarmActionInvocationResult {
      if (actionRef === START_GAME_ACTION_REF) {
        actStartGame();
        return { ok: true, actionRef, state: getGameStateMap() };
      }
      return { ok: false, actionRef, state: getGameStateMap() };
    },
    getState: () => getGameStateMap(),
    get states(): GameStateMap {
      return getGameStateMap();
    },
  };
  window.__SETFARM_TEST_BRIDGE__ = bridge;
  window.__SETFARM_SCENARIO_MODE__ = "manual";
  return bridge;
}
