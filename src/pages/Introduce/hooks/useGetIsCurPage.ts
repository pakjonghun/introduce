import { useState } from "react";
import { useEffect } from "react";
import {
  scrollDirectionState,
  scrollTopState,
} from "../../../recoil/Introduce/atom";
import { useRecoilValue } from "recoil";
import { getCurrentPage } from "../../../utils/scrollFunctions";

function useGetIsCurPage(page: number) {
  const scrollTop = useRecoilValue(scrollTopState);
  const scrollDirection = useRecoilValue(scrollDirectionState);
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    const curPage = getCurrentPage({
      scrollTop,
      clientHeight: document.documentElement.clientHeight,
      scrollDirection,
    });

    console.log(curPage);

    if (curPage) setCurPage(curPage);
  }, [scrollTop]);

  return curPage === page;
}

export default useGetIsCurPage;
