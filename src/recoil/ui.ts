import { atom } from "recoil";
import { PYEONG } from "./key";

export const isPyeongState = atom({
	key: PYEONG,
	default: true,
})