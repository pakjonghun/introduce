import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  scrollDirectionState,
  isSwitchingPageState,
} from "./../../../recoil/Introduce/atom";
import { useSetRecoilState } from "recoil";

const useSetScrollDirectionNone = () => {
  const setScrollDirection = useSetRecoilState(scrollDirectionState);
  const isSwitchingPage = useRecoilValue(isSwitchingPageState);

  useEffect(() => {
    if (!isSwitchingPage) setScrollDirection(null);
  }, [isSwitchingPage, setScrollDirection]);
};

export default useSetScrollDirectionNone;
