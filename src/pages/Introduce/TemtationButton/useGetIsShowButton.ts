import { useState } from "react";
import { useEffect } from "react";
import { scrollDirectionState } from "./../../../recoil/Introduce/atom";
import { useRecoilValue } from "recoil";
import useDelaySetState from "../../../hooks/useDelaySetState";
import { scrollTopState } from "../../../recoil/Introduce/atom";

const useGetIsShowButton = () => {
  const [isBottom, setIsBottom] = useState(false);
  const scrollTop = useRecoilValue(scrollTopState);
  const scrollDirection = useRecoilValue(scrollDirectionState);
  const isButtonShow = useDelaySetState({
    delay: 1000,
    state: scrollDirection === null,
    isNotDelay: scrollDirection !== null,
  });

  useEffect(() => {
    const { scrollHeight, clientHeight } = document.documentElement;
    const isBottom = scrollHeight === scrollTop + clientHeight;
    setIsBottom(isBottom);
  }, [scrollTop]);

  return !isBottom && isButtonShow;
};

export default useGetIsShowButton;
