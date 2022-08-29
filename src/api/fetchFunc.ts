import { getFetch } from "./utils";

export interface RequestGetPostList {
  searchTerm?: string;
  category?: string;
  page: number;
  perPage: number;
}

export const getPostList = async (args: RequestGetPostList) => {
  return getFetch({ endPoint: "", params: args });
};

export const getPost = async (postId: string) => {
  return getFetch({ endPoint: postId });
};
