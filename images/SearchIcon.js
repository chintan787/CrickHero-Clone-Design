import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function SearchIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m15 15 6 6"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke={props.color}
      strokeWidth={2}
    />
  </Svg>
  )
}
