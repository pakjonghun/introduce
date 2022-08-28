import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { scrollDirectionState, scrollTopState } from "../recoil/Introduce/atom";

function useSetScrollTop() {
  const [scrollTop, setScrollTop] = useRecoilState(scrollTopState);
  const setScrollDirection = useSetRecoilState(scrollDirectionState);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    function setScrollInfo() {
      setScrollTop(document.documentElement.scrollTop);
      setScrollDirection(
        scrollTop < document.documentElement.scrollTop ? "down" : "up"
      );
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setScrollDirection(null);
    }, 300);

    window.removeEventListener("scroll", setScrollInfo);
    window.addEventListener("scroll", setScrollInfo);

    return () => {
      window.removeEventListener("scroll", setScrollInfo);
      if (timer) clearTimeout(timer);
    };
  }, [setScrollTop, setScrollDirection, scrollTop]);
}

export default useSetScrollTop;
