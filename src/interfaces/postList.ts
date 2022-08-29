import { Post } from "./post";

export interface PostSearchResults {
  data: Post[];
  totalCount: number;
}
