import { ItemDetail } from "./type";

export const itemDetailSelector = ({item}: ItemDetail) => {
  return {
    ...item,
    fullAddr: `${item.local2} ${item.local2} ${item.local3}`
  }
}

export const itemSubwaySelector = ({subways}: ItemDetail) => {
  return subways.map(s => ({...s, lineNumber: s.description.replace(/^(\d).+$/, "$1")}))
}