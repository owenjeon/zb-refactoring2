import React from "react"
import { useHistory } from "react-router"
import 원오빌상세item from "../components/원오빌/ItemInfo"
import 원오빌상세subway from "../components/원오빌/Subway"

export default function 원룸상세() {
  const history = useHistory()
  return <div style={{backgroundColor: "#999"}}>
    <h2>원룸 상세 <button onClick={history.goBack}>뒤로가기</button></h2>
    <hr />
    <원오빌상세item />
    <원오빌상세subway />
  </div>
}