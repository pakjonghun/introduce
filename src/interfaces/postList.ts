import { Post } from "./post";

export interface PostListResponse {
  data: Post[];
  totalCount: number;
}
