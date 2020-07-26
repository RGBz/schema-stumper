import { useEffect, useRef, MutableRefObject } from 'react';

export default function useInterval(callback: () => void, delay?: number): void {
  const savedCallback: MutableRefObject<undefined | (() => void)> = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
