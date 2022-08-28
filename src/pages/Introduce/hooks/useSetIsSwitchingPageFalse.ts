import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isSwitchingPageState } from "../../../recoil/Introduce/atom";
const useSetIsSwitchingPageFalse = (delay = 700) => {
  const [isSwitchingPage, setIsSwitchingPage] =
    useRecoilState(isSwitchingPageState);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isSwitchingPage) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsSwitchingPage(false);
      }, delay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [setIsSwitchingPage, isSwitchingPage, delay]);
};

export default useSetIsSwitchingPageFalse;
