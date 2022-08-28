import { useEffect } from "react";
import { useState } from "react";

interface UseGetTypingTextProps {
  title: string;
  interval: number;
  isAniStart: boolean;
}

const useGetTypingText = ({
  title,
  interval,
  isAniStart,
}: UseGetTypingTextProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!isAniStart) return;
    let idx = 0;
    let word = "";

    const timer = setInterval(() => {
      word += title.charAt(idx++).toUpperCase();
      setText(word);
      if (idx === title.length) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [title, interval, isAniStart]);

  return text;
};

export default useGetTypingText;
