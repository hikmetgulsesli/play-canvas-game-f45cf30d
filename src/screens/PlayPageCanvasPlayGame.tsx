// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Play Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasPlayGameActionId = "start-game-1";

export interface PlayPageCanvasPlayGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasPlayGameActionCallbacks = NonNullable<PlayPageCanvasPlayGameProps["actions"]>;

export function PlayPageCanvasPlayGame({ actions }: PlayPageCanvasPlayGameProps) {
  return (
    <>
      {/* Top decorative chrome bar (strictly non-actionable) */}
        <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              CP
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Canvas Play Game</div>
              <div className="text-xs text-slate-400">Route /play</div>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Canvas Engine Ready</span>
            </div>
            <div className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700/60 text-slate-300 font-mono">
              v1.0.0
            </div>
          </div>
        </header>
      
        {/* Root Surface: SURF_PLAY_PAGE */}
        <main data-surface-id="SURF_PLAY_PAGE" className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col space-y-6" data-setfarm-element-ref="E000001">
          
          {/* Top HUD: Controls & Surface Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Control Panel card with primary Start Game button */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">Game Controls</div>
                <h2 className="text-xl font-bold text-white mb-2">Session Control</h2>
                <p className="text-sm text-slate-400 mb-4">
                  Initialize the game loop and render context for the active canvas session.
                </p>
              </div>
              
              {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
              <div>
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 transition-colors duration-150 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_OBS_START_BUTTON_STATE" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  <span>Start Game</span>
                </button>
              </div>
            </div>
      
            {/* Surface: SURF_SCORE_DISPLAY */}
            <div data-surface-id="SURF_SCORE_DISPLAY" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_OBS_SCORE_VALUE">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Current Score</div>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">Active Round</span>
              </div>
              <div className="my-4">
                <div className="text-5xl font-mono font-extrabold tracking-tight text-white">0</div>
              </div>
              <div className="text-xs text-slate-500 flex items-center justify-between border-t border-slate-800/80 pt-3">
                <span>High Score: 0</span>
                <span>Storage: Synced</span>
              </div>
            </div>
      
            {/* Surface: SURF_STATUS_MESSAGE */}
            <div data-surface-id="SURF_STATUS_MESSAGE" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between" data-setfarm-element-ref="E000004">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">System Notification</div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">Live</span>
              </div>
              <div className="my-4">
                <div className="flex items-center space-x-3 text-emerald-400" data-setfarm-element-ref="E000005" role="status" aria-label="Game started" data-observable-refs="OBS_START_GAME_OBS_STATUS_MESSAGE_TEXT">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                  <span className="text-xl font-bold tracking-wide">Game started</span>
                </div>
              </div>
              <div className="text-xs text-slate-500 border-t border-slate-800/80 pt-3">
                Status feedback rendered on application dispatch.
              </div>
            </div>
          </div>
      
          {/* Surface: SURF_GAME_CANVAS */}
          <div data-surface-id="SURF_GAME_CANVAS" className="flex-1 min-h-[520px] bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col items-center justify-center p-4" data-setfarm-element-ref="E000006">
            {/* High-tech backdrop grid and ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-slate-950 to-slate-950"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
            {/* Game Canvas Render Target */}
            <div className="relative z-10 w-full max-w-4xl h-[460px] bg-slate-950 rounded-xl border border-slate-800/80 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
              {/* Interactive retro-styled canvas viewport illustration */}
              <canvas width="896" height="460" className="w-full h-full bg-slate-950 block"></canvas>
              <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 text-center">
                <div className="h-20 w-20 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-xl mb-4 text-cyan-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path>
                  </svg>
                </div>
                <div className="text-xl font-bold text-slate-200">Interactive Canvas Viewport</div>
                <div className="text-sm text-slate-400 max-w-md mt-1 font-mono">
                  60 FPS Render Pipeline Active | Direct2D Surface Ready
                </div>
                <div className="mt-6 flex items-center space-x-3 text-xs font-mono text-slate-500">
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">Width: 896px</span>
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">Height: 460px</span>
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">WebGL / 2D Context</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      
        {/* Non-actionable footer metadata */}
        <footer className="border-t border-slate-800/80 bg-slate-900/40 px-8 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>Canvas Play Game Engine © 2025</div>
          <div className="flex items-center space-x-4">
            <span>Route: /play</span>
            <span>State: playing</span>
          </div>
        </footer>
    </>
  );
}
