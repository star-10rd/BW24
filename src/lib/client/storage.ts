export type StorageKind = 'localStorage' | 'sessionStorage';
export type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

export function storageAvailable(kind: StorageKind): StorageLike | null {
  if (typeof window === 'undefined') return null;
  try {
    const storage = window[kind];
    const key = '__bw26_storage_test__';
    storage.setItem(key, '1');
    storage.removeItem(key);
    return storage;
  } catch {
    return null;
  }
}

export function safeGet(storage: StorageLike | null, key: string): string | null {
  if (!storage) return null;
  try { return storage.getItem(key); } catch { return null; }
}

export function safeSet(storage: StorageLike | null, key: string, value: string): boolean {
  if (!storage) return false;
  try { storage.setItem(key, value); return true; } catch { return false; }
}

export function safeRemove(storage: StorageLike | null, key: string): boolean {
  if (!storage) return false;
  try { storage.removeItem(key); return true; } catch { return false; }
}

export function safeParseJson<T>(storage: StorageLike | null, key: string): T | null {
  const raw = safeGet(storage, key);
  if (raw === null) return null;
  try { return JSON.parse(raw) as T; } catch { safeRemove(storage, key); return null; }
}
