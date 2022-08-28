import { useEffect, useState } from "react";
import { easeOutExpo } from "./utils";

export interface UseGetCountingNumberProps {
  endNumber: number;
  duration: number;
  isAniStart: boolean;
  delay?: number;
  startNumber?: number;
}

const useGetCountingNumber = ({
  endNumber,
  duration,
  delay = 0,
  startNumber = 0,
  isAniStart,
}: UseGetCountingNumberProps) => {
  const frame = 60;
  const totalFrameCount = Math.floor((frame / 1000) * duration);
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    if (!isAniStart) return;
    let number = startNumber;

    setTimeout(() => {
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
    }, delay);
  }, [startNumber, endNumber, totalFrameCount, duration, delay, isAniStart]);

  return number;
};

export default useGetCountingNumber;
