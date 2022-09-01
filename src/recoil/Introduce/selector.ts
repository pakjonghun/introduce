import { selector } from "recoil";
import { getTotalCount } from "../../api/fetchFunc";
export const getTotalTilCountQuery = selector({
  key: "getTotalTilCountQuery",
  get: () => getTotalCount(),
});
