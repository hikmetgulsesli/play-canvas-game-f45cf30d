import { useEffect } from "react";
import { GameRuntimeProvider, useGameRuntime } from "./features/prod-play-canvas-game/prod-play-canvas-game.store";
import { GAME_STARTED_STATUS_MESSAGE } from "./features/prod-play-canvas-game/prod-play-canvas-game.types";
import { PlayPageCanvasPlayGame } from "./screens/PlayPageCanvasPlayGame";
import { installSetfarmTestBridge } from "./test/bridge";

function PlayScreen() {
  const { state, startGame } = useGameRuntime();
  return (
    <PlayPageCanvasPlayGame
      score={state.score}
      highScore={state.persistedHighScore ?? 0}
      statusMessage={GAME_STARTED_STATUS_MESSAGE}
      phase={state.gamePhase}
      actions={{ "start-game-1": startGame }}
    />
  );
}

export default function App() {
  useEffect(() => {
    installSetfarmTestBridge();
  }, []);

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      <GameRuntimeProvider>
        <PlayScreen />
      </GameRuntimeProvider>
    </div>
  );
}
