export interface PostHead {
  category: string;
  date: string;
}

export interface Post {
  id: string;
  head: PostHead;
  body: string;
}
