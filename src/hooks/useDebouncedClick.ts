import { useCallback, useRef } from "react";

export default function useDebouncedClick(
  callback: () => void,
  delay: number = 1000
) {
  const isClickedRef = useRef(false);

  const handleClick = useCallback(() => {
    if (isClickedRef.current) return;

    isClickedRef.current = true;
    callback();

    setTimeout(() => {
      isClickedRef.current = false;
    }, delay);
  }, [callback, delay]);

  return handleClick;
}
