import { atom } from "recoil"

export const jobDescriptionState = atom<number>({
  key: 'jobDescriptionState',
  default: 0
})