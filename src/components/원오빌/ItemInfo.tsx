import { useRecoilState } from "recoil"
import useItemDetail from "../../queries/원오빌itemDetail"
import { itemDetailSelector } from "../../queries/원오빌itemDetail/selector"
import { isPyeongState } from "../../recoil/ui"

export default function 원오빌상세item() {
  const {data, isSuccess} = useItemDetail(itemDetailSelector)
  const [isPyeong, setPyeong] = useRecoilState(isPyeongState)
  if(!data || !isSuccess) return null
  return <div style={{padding: 10}}>
    <div>service_type: {data.service_type}</div>
    <div>면적 타입: {isPyeong ? "평" : "m2"} <button onClick={()=> setPyeong(!isPyeong)}>면적 토클</button></div>
    <div>전체 주소: {data.fullAddr}</div>
    <img src={`${data.image_thumbnail}?w=200&h=120`} alt="썸네일" />
  </div>
}