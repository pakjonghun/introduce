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

export const isSearchingState = atom({
  key: "isSearchingState",
  default: false,
});

export const isSearchLoadingState = atom({
  key: "isSearchLoadingState",
  default: false,
});
