export interface RequestGetPostList {
  term?: string;
  category?: string;
  page: number;
  perPage: number;
  sortKey?: string;
  sortValue?: string;
}
