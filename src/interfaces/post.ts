export interface PostHead {
  category: string;
  date: string;
}

export interface PostListResponse {
  id: string;
  head: PostHead;
  body: string;
}
