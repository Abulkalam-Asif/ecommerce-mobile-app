import { useCallback, useRef } from "react";

export function useSinglePress(delay = 1000) {
  const lastPress = useRef(0);

  return useCallback(() => {
    const now = Date.now();
    if (now - lastPress.current < delay) return false;
    lastPress.current = now;
    return true;
  }, [delay]);
}
