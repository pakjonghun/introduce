import { atom } from "recoil";

export const scrollTopState = atom({
  key: "scrollTopState",
  default: 0,
});

export const scrollDirectionState = atom<null | string>({
  key: "scrollDirectionState",
  default: null,
});

export const isSwitchingPageState = atom<boolean>({
  key: "isSwitchingPageState",
  default: false,
});
