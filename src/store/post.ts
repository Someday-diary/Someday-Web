import { atom } from "recoil";

export const postState = atom<object[]>({
  key: 'postState',
  default: []
});

export const postDetailState = atom<object>({
  key: 'postDetailState',
  default: {}
});