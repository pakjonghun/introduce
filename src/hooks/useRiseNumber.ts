import { useEffect, useState, useRef } from "react";

export interface UseRiseCountProps {
  endNumber: number;
  duration: number;
  delay?: number;
  startNumber?: number;
}

const useRiseCount = ({
  endNumber,
  duration,
  delay = 0,
  startNumber = 0,
}: UseRiseCountProps) => {
  const frame = 60;
  const totalFrameCount = Math.floor((frame / 1000) * duration);
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
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
  }, [startNumber, endNumber, totalFrameCount, duration, delay]);

  return number;
};

export default useRiseCount;

interface EastOutExpoProps {
  t: number;
  b: number;
  c: number;
  d: number;
}

function easeOutExpo({ t, b, c, d }: EastOutExpoProps) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}
