import { useEffect } from "react";
import {
  selectedTagsState,
  sortState,
  searchTermState,
  pageState,
} from "../../recoil/postlist/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSearchLoadingState } from "../../recoil/postlist/atom";
const useSetIsSearchingLoading = () => {
  const setIsLoading = useSetRecoilState(isSearchLoadingState);
  const setPage = useSetRecoilState(pageState);

  const tag = useRecoilValue(selectedTagsState);
  const [key, value] = useRecoilValue(sortState);
  const searchTerm = useRecoilValue(searchTermState);

  useEffect(() => {
    setIsLoading(true);
    setPage(1);
  }, [tag, key, value, searchTerm, setPage, setIsLoading]);
};

export default useSetIsSearchingLoading;
