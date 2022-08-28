import { useCallback } from "react";
import {
  isSwitchingPageState,
  scrollTopState,
} from "./../recoil/Introduce/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCurPage } from "../utils/scrollFunctions";

const useGetPageSwitchFunc = () => {
  const [isSwitchingPage, setIsSwitchingPageState] =
    useRecoilState(isSwitchingPageState);

  const clientHeight = document.documentElement.clientHeight;
  const curTop = useRecoilValue(scrollTopState);
  const curPage = getCurPage(curTop, clientHeight);

  const onClick = useCallback(() => {
    if (isSwitchingPage) return;

    setIsSwitchingPageState(true);
    window.scrollTo(0, curPage * clientHeight);
  }, [setIsSwitchingPageState, curPage, clientHeight, isSwitchingPage]);

  return onClick;
};

export default useGetPageSwitchFunc;
