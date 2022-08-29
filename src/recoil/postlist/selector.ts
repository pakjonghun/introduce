import { categoryState, pageState, searchTermState } from "./atom";
import { Loadable, selector, selectorFamily, waitForNone } from "recoil";
import { PostListResponse } from "../../interfaces/post";
import { getPost, getPostList } from "../../api/fetchFunc";
import { PER_PAGE } from "./constants";

export const getPostListQuery = selectorFamily({
  key: "getPostListQuery",
  get:
    (page: number) =>
    ({ get }) => {
      const searchTerm = get(searchTermState);
      const category = get(categoryState);
      return getPostList({ page, category, searchTerm, perPage: PER_PAGE });
    },
});

export const getPostListsQuery = selector<Loadable<PostListResponse>[]>({
  key: "getPostListsQuery",
  get: async ({ get }) => {
    const page = get(pageState);
    const pageList = Array.from({ length: page }, (_, idx) => idx + 1);
    return get(waitForNone(pageList.map((page) => getPostListQuery(page))));
  },
});
