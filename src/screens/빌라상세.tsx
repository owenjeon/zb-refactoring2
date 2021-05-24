import React, { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import 원오빌상세item from "../components/원오빌/원오빌상세item"
import 원오빌상세subway from "../components/원오빌/원오빌상세subway"
import { 원오빌ItemIdState } from "../recoil/원오빌item"

interface Props {
  id: string
}

export default function 빌라상세({id}: Props) {
  const setItemId = useSetRecoilState(원오빌ItemIdState)
  useEffect(() => {
    setItemId(id)
  }, [])
  return <div style={{backgroundColor: "skyblue"}}>
    <원오빌상세item />
    <원오빌상세subway />
  </div>
}