import { PostListResponse } from "./post";

export interface PostSearchResults {
  data: PostListResponse[];
  totalCount: number;
}
