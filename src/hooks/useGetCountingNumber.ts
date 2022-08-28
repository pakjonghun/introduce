import { useEffect, useState } from "react";

export interface UseRiseCountProps {
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
}: UseRiseCountProps) => {
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

interface EastOutExpoProps {
  t: number;
  b: number;
  c: number;
  d: number;
}

function easeOutExpo({ t, b, c, d }: EastOutExpoProps) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}
