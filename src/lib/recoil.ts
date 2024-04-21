import { atom } from "recoil";

export const searchModeState = atom({
  key: "searchState",
  default: {
    mode: false,
    yoffset: null as number | null,
    keyword: null as string | null,
  },
});
