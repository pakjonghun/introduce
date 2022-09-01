import { selectorFamily } from "recoil";
import { getPost } from "../../api/fetchFunc";
import { Post } from "../../interfaces/post";

export const getPostDetailQuery = selectorFamily<Post, string>({
  key: "getPostListQuery",
  get: (id: string) => () => {
    return getPost(id);
  },
});
