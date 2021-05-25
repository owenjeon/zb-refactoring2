import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { QueryKey } from "../key"
import { ItemDetail } from "./type"

export default function useItemDetail<T>(select: (arg: ItemDetail) => T) {
  const {itemId: id} = useParams<{itemId: string}>()
  return useQuery(
    [QueryKey.ITEM_DETAIL, id], 
    () => axios.get<ItemDetail>(`https://apis.zigbang.com/v2/items/${id}`).then(res => res.data),
    {
      select,
      enabled: id !== undefined
    }
    )
}