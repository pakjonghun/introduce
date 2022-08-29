import { scrollDirectionState } from "./../../../recoil/Introduce/atom";
import { useRecoilValue } from "recoil";
import useDelaySetState from "../../../hooks/useDelaySetState";

const useGetIsShowNav = () => {
  const scrollDirection = useRecoilValue(scrollDirectionState);
  const isShowNav = useDelaySetState({
    delay: 100,
    state: scrollDirection === null,
    isNotDelay: scrollDirection !== null,
  });

  return isShowNav;
};

export default useGetIsShowNav;
