import { HIGH_SCORE_STORAGE_KEY } from "./prod-play-canvas-game.types";

function safeStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function parseHighScore(raw: string): number | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === "number" && Number.isFinite(parsed)) return parsed;
    if (parsed && typeof parsed === "object" && "value" in (parsed as Record<string, unknown>)) {
      const value = (parsed as Record<string, unknown>).value;
      if (typeof value === "number" && Number.isFinite(value)) return value;
    }
  } catch {
    /* fall through to plain numeric form */
  }
  const plain = Number(raw);
  return Number.isFinite(plain) ? plain : null;
}

export function readPersistedHighScore(): number | null {
  const storage = safeStorage();
  if (!storage) return null;
  const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
  if (raw === null) return null;
  return parseHighScore(raw);
}

export function writePersistedHighScore(value: number): void {
  const storage = safeStorage();
  if (!storage) return;
  storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify({ value }));
}

export function clearPersistedHighScore(): void {
  const storage = safeStorage();
  if (!storage) return;
  storage.removeItem(HIGH_SCORE_STORAGE_KEY);
}
