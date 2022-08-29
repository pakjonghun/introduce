import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isSearchLoadingState } from "../../recoil/postlist/atom";

const LoadingSpinner = () => {
  const setIsSearchLoading = useSetRecoilState(isSearchLoadingState);

  useEffect(() => {
    setIsSearchLoading(true);
  }, [setIsSearchLoading]);

  return <div>loading</div>;
};

export default LoadingSpinner;
