import { PostListResponse } from "./../../interfaces/postList";
import {
  pageState,
  searchTermState,
  selectedTagsState,
  sortState,
} from "./atom";
import { Loadable, selector, selectorFamily, waitForNone } from "recoil";
import { getCategory, getPostList } from "../../api/fetchFunc";
import { PER_PAGE } from "./constants";

export const getPostListQuery = selectorFamily({
  key: "getPostListQuery",
  get:
    (page: number) =>
    ({ get }) => {
      const term = get(searchTermState);
      const category = get(selectedTagsState)?.join(",");
      const [sortKey, sortValue] = get(sortState);
      return getPostList({
        page,
        category,
        term,
        perPage: PER_PAGE,
        sortKey,
        sortValue,
      });
    },
});

export const getPostListsQuery = selector<Loadable<PostListResponse>[]>({
  key: "getPostListsQuery",
  get: ({ get }) => {
    const page = get(pageState);
    const pageList = Array.from({ length: page }, (_, idx) => idx + 1);
    return get(waitForNone(pageList.map((page) => getPostListQuery(page))));
  },
});

export const getCategoryQuery = selector({
  key: "getCategoryQuery",
  get: () => getCategory(),
});
