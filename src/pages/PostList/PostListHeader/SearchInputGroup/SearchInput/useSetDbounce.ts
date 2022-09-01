import { useEffect } from "react";
import {
  isSearchLoadingState,
  searchTermState,
} from "../../../../../recoil/postlist/atom";
import { useSetRecoilState } from "recoil";

const useSetDbounce = (term: string) => {
  const setSearchTerm = useSetRecoilState(searchTermState);
  const setIsSearchLoading = useSetRecoilState(isSearchLoadingState);

  useEffect(() => {
    let timer: null | NodeJS.Timeout = null;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchTerm(term);
      setIsSearchLoading(true);
      if (timer) clearTimeout(timer);
      timer = null;
    }, 500);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [term, setSearchTerm, setIsSearchLoading]);
};

export default useSetDbounce;
