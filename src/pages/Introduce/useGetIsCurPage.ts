import { useState } from "react";
import { useEffect } from "react";
import { scrollTopState } from "../../recoil/Introduce/atom";
import { useRecoilValue } from "recoil";
import { getCurPage } from "../../utils/scrollFunctions";

function useGetIsCurPage(page: number) {
  const scrollTop = useRecoilValue(scrollTopState);
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    const curPage = getCurPage(
      scrollTop,
      document.documentElement.clientHeight
    );
    setCurPage(curPage);
  }, [scrollTop]);

  return curPage === page;
}

export default useGetIsCurPage;
