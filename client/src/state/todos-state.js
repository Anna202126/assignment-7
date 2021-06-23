import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "todos" });

export const todosState = atom({
  key: "todos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
