'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * State kept in sessionStorage for this tab only, so a reload keeps the visitor's answers.
 * Nothing is sent anywhere. Storage errors (private mode, blocked storage) fall back to memory.
 */
export function useSessionState<T extends object>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  const initialRef = useRef(initial);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(key);
      if (raw) setValue({ ...initialRef.current, ...JSON.parse(raw) });
    } catch {
      // Storage unavailable or corrupt: start fresh.
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore quota or privacy-mode errors.
    }
  }, [key, value, ready]);

  const clear = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key);
    } catch {
      // Nothing to clear.
    }
    setValue(initialRef.current);
  }, [key]);

  return [value, setValue, clear, ready] as const;
}
