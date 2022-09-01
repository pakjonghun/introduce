import { useCallback } from "react";
import { isSwitchingPageState } from "./../../../recoil/Introduce/atom";
import { useRecoilState } from "recoil";

const useGetOnMenuClickFunc = () => {
  const [isSwitchingPage, setIsSwitchingPage] =
    useRecoilState(isSwitchingPageState);

  const onClickMenu = useCallback(
    (scrollTop: number) => {
      if (isSwitchingPage) return;
      setIsSwitchingPage(true);
      window.scrollTo(0, scrollTop);
    },
    [setIsSwitchingPage, isSwitchingPage]
  );

  return onClickMenu;
};

export default useGetOnMenuClickFunc;
