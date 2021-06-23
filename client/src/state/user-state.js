import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: tokenPersist } = recoilPersist({ key: "token" });
const { persistAtom: userPersist } = recoilPersist({ key: "user" });

export const tokenState = atom({
  key: "token",
  default: "",
  effects_UNSTABLE: [tokenPersist],
});

export const userState = atom({
  key: "user",
  default: null,
  effects_UNSTABLE: [userPersist],
});
