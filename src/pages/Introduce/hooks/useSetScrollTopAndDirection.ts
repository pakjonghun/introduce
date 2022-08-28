import { isSwitchingPageState } from "./../../../recoil/Introduce/atom";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  scrollDirectionState,
  scrollTopState,
} from "../../../recoil/Introduce/atom";
import useSetScrollDirectionNone from "./useSetScrollDirectionNone";

function useSetScrollTopAndDirection() {
  const [scrollTop, setScrollTop] = useRecoilState(scrollTopState);
  const setScrollDirection = useSetRecoilState(scrollDirectionState);
  const setIsPageSwitching = useSetRecoilState(isSwitchingPageState);
  useSetScrollDirectionNone();

  useEffect(() => {
    function setScrollInfo() {
      setIsPageSwitching(true);
      setScrollTop(document.documentElement.scrollTop);
      setScrollDirection(
        scrollTop < document.documentElement.scrollTop ? "down" : "up"
      );
    }

    window.removeEventListener("scroll", setScrollInfo);
    window.addEventListener("scroll", setScrollInfo);

    return () => {
      window.removeEventListener("scroll", setScrollInfo);
    };
  }, [setScrollTop, setScrollDirection, setIsPageSwitching, scrollTop]);
}

export default useSetScrollTopAndDirection;
