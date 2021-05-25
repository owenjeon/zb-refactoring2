import useItemDetail from "../../queries/원오빌itemDetail"
import { itemSubwaySelector } from "../../queries/원오빌itemDetail/selector"

export default function 원오빌상세subway() {
  const {data, isSuccess} = useItemDetail(itemSubwaySelector)
  if(!data || !isSuccess) return null
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>
          [{item.lineNumber}] {item.name}
        </li>
      ))}
    </ul>
  );
}