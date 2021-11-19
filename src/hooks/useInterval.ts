import { useEffect, useLayoutEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const IntervalId = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(IntervalId);
  }, [delay]);
};

export default useInterval;
