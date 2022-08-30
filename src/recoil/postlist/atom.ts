import { atom } from "recoil";

export const postListCountState = atom({
  key: "postListCountState",
  default: 0,
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});

export const searchTermState = atom({
  key: "searchTermState",
  default: "",
});

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

export const isCategoryOpenState = atom({
  key: "isCategoryOpenState",
  default: false,
});

export const isSearchingState = atom({
  key: "isSearchingState",
  default: false,
});

export const isSearchLoadingState = atom({
  key: "isSearchLoadingState",
  default: false,
});

export const selectedTagsState = atom<string[]>({
  key: "selectedTagsState",
  default: [],
});

export const isSortOpenState = atom({
  key: "isSortOpenState",
  default: false,
});

export const sortState = atom<[string, boolean]>({
  key: "sortState",
  default: ["", false],
});
