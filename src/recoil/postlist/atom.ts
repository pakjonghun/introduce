import { atom } from "recoil";

export const searchPostCountState = atom({
  key: "searchPostCountState",
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
