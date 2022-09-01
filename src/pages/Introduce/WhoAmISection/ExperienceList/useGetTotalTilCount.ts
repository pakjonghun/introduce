import { getTotalTilCountQuery } from "./../../../../recoil/Introduce/selector";
import { useRecoilValueLoadable } from "recoil";
const useGetTotalCount = () => {
  const totalTilCount = useRecoilValueLoadable(getTotalTilCountQuery);
  if (totalTilCount.state === "hasValue") return totalTilCount.contents;
  else return 0;
};

export default useGetTotalCount;
