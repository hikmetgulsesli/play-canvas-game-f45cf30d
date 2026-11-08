import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { actStartGame } from "../surf-play-page/act_start_game";
import {
  getGameState,
  getGameStateMap,
  subscribeGameState,
} from "../../game/game-runtime";
import type { GameRuntimeState, GameStateMap } from "./prod-play-canvas-game.types";

export interface GameRuntimeView {
  state: GameRuntimeState;
  stateMap: GameStateMap;
  startGame: () => void;
}

const GameRuntimeContext = createContext<GameRuntimeView | null>(null);

export function GameRuntimeProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(subscribeGameState, getGameState, getGameState);
  const value = useMemo<GameRuntimeView>(
    () => ({
      state,
      stateMap: getGameStateMap(),
      startGame: () => {
        actStartGame();
      },
    }),
    [state],
  );
  return <GameRuntimeContext.Provider value={value}>{children}</GameRuntimeContext.Provider>;
}

export function useGameRuntime(): GameRuntimeView {
  const value = useContext(GameRuntimeContext);
  if (!value) {
    throw new Error("GAME_RUNTIME_PROVIDER_MISSING");
  }
  return value;
}
