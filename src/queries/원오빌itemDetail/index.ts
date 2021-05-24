import axios from "axios"
import { useQuery } from "react-query"
import { useRecoilValue } from "recoil"
import { 원오빌ItemIdState } from "../../recoil/원오빌item"
import { QueryKey } from "../key"
import { ItemDetail } from "./type"

export default function useItemDetail<T>(select: (arg: ItemDetail) => T) {
  const id = useRecoilValue(원오빌ItemIdState)
  return useQuery(
    [QueryKey.ITEM_DETAIL, id], 
    () => axios.get<ItemDetail>(`https://apis.zigbang.com/v2/items/${id}`).then(res => res.data),
    {
      select,
      enabled: id !== undefined
    }
    )
}