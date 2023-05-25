import React from 'react'
import Svg, { Path } from "react-native-svg"

export default function MessageIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M8 8h8m-8 4h5m-6 4v5l5-5h8V4H4v12h3Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
