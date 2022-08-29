import { useCallback, useEffect, useState } from "react";
import {
  isSwitchingPageState,
  scrollTopState,
} from "../../../recoil/Introduce/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCurPageWhenNotScrolling } from "../../../utils/scrollFunctions";

const useGetPageSwitchFunc = () => {
  const [isSwitchingPage, setIsSwitchingPageState] =
    useRecoilState(isSwitchingPageState);

  const curTop = useRecoilValue(scrollTopState);
  const [curPage, setCurPage] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    const curPage = getCurPageWhenNotScrolling(curTop, clientHeight);
    setClientHeight(clientHeight);
    setCurPage(curPage);
  }, [curTop]);

  const onClick = useCallback(() => {
    if (isSwitchingPage) return;

    setIsSwitchingPageState(true);
    window.scrollTo(0, curPage * clientHeight);
  }, [setIsSwitchingPageState, curPage, clientHeight, isSwitchingPage]);

  return onClick;
};

export default useGetPageSwitchFunc;
