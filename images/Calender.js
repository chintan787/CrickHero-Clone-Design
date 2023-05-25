import React from 'react'
import Svg, { Path } from "react-native-svg";

export default function Calender() {
  return (
    <Svg
    fill="#fff"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M3 22h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1ZM4 7h16v3H4Zm0 5h16v8H4Z" />
  </Svg>
  )
}
