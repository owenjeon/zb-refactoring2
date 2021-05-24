import { atom } from "recoil";
import { 원오빌_ITEM_ID } from "./key";

export const 원오빌ItemIdState = atom<string | undefined>({
	key: 원오빌_ITEM_ID,
	default: undefined,
})