import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import {
  scrollDirectionState,
  scrollTopState,
} from "../../../recoil/Introduce/atom";
import { getCurrentPage } from "../../../utils/scrollFunctions";

interface UseSetIndicatorTopProp {
  setFunc: (value: number) => void;
}

const useSetIndicatorTop = ({ setFunc }: UseSetIndicatorTopProp) => {
  const scrollTop = useRecoilValue(scrollTopState);
  const scrollDirection = useRecoilValue(scrollDirectionState);
  const clientHeight = document.documentElement.clientHeight;
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (wrapperRef.current) {
      const curPage = getCurrentPage({
        scrollTop,
        clientHeight,
        scrollDirection,
      });
      if (curPage) {
        setFunc(wrapperRef.current.clientHeight * (curPage - 1) * 0.25);
      }
    }
  }, [scrollTop]);

  return wrapperRef;
};

export default useSetIndicatorTop;
