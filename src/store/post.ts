import { atom } from "recoil";

export const postState = atom<object[]>({
  key: 'postState',
  default: []
});