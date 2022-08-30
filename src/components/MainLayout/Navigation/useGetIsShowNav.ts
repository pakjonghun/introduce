import { useState } from "react";
import { useEffect } from "react";
import { scrollDirectionState } from "./../../../recoil/Introduce/atom";
import { useRecoilValue } from "recoil";
import useDelaySetState from "../../../hooks/useDelaySetState";

const useGetIsShowNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDirection = useRecoilValue(scrollDirectionState);

  const delayShow = useDelaySetState({
    delay: 100,
    state: !isScrolling,
    isNotDelay: isScrolling,
  });

  useEffect(() => {
    if (scrollDirection === null) setIsScrolling(false);
    else setIsScrolling(true);
  }, [scrollDirection]);

  if (isScrolling) return delayShow;
  else return true;
};

export default useGetIsShowNav;
