import { RequestGetPostList } from "./interfaces";
import { getFetch } from "./utils";

export const getPostList = async (args: RequestGetPostList) => {
  return getFetch({ endPoint: "", params: args });
};

export const getPost = async (postId: string) => {
  return getFetch({ endPoint: postId });
};

export const getCategory = async () => {
  return getFetch({ endPoint: "category" });
};

export const getTotalCount = async () => {
  return getFetch({ endPoint: "totalCount" });
};
