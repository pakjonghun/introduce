import { useEffect, useState } from "react";
import { easeOutExpo } from "./utils";

export interface UseGetCountingNumberProps {
  endNumber: number;
  duration: number;
  isAniStart: boolean;
  startNumber?: number;
}

const useGetCountingNumber = ({
  endNumber,
  duration,
  startNumber = 0,
  isAniStart,
}: UseGetCountingNumberProps) => {
  const frame = 60;
  const totalFrameCount = Math.floor((frame / 1000) * duration);
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    if (!isAniStart) return;
    let number = startNumber;

    const timer = setInterval(() => {
      number += 1;
      const percent = easeOutExpo({
        t: number / totalFrameCount,
        b: startNumber,
        c: 1,
        d: 1,
      });
      const currentNumber = Math.floor((endNumber - startNumber) * percent);
      setNumber(currentNumber);
      if (percent === 1) clearInterval(timer);
    }, 1000 / frame);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [startNumber, endNumber, totalFrameCount, duration, isAniStart]);
  return number;
};

export default useGetCountingNumber;
