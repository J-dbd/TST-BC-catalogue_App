import { atom } from "recoil";

export const searchModeState = atom({
  key: "searchState",
  default: {
    mode: false,
    yoffset: 0 as number,
    keyword: "" as string,
  },
});
