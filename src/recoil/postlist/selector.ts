import { PostListResponse } from "./../../interfaces/postList";
import { categoryState, pageState, searchTermState } from "./atom";
import { Loadable, selector, selectorFamily, waitForNone } from "recoil";
import { getPostList } from "../../api/fetchFunc";
import { PER_PAGE } from "./constants";

export const getPostListQuery = selectorFamily({
  key: "getPostListQuery",
  get:
    (page: number) =>
    ({ get }) => {
      const term = get(searchTermState);
      const category = get(categoryState);
      return getPostList({ page, category, term, perPage: PER_PAGE });
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
