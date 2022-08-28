import { useEffect, useState } from "react";

interface UseDelayProps {
  delay: number;
  state: any;
  isNotDelay?: boolean;
}

const useDelaySetState = ({ delay, state, isNotDelay }: UseDelayProps) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isNotDelay) setValue(state);
    else {
      timer = setTimeout(() => {
        setValue(state);
      }, delay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isNotDelay, delay, state]);

  return value;
};

export default useDelaySetState;
