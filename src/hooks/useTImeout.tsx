import { useEffect, useState } from 'react';

interface Props {
  callback: any;
  delay: number;
}
const useTimeout = (callback: TimerHandler, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    const newTimeoutId = setTimeout(callback, delay);
    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [callback, delay]);

  return timeoutId;
};

export default useTimeout;
