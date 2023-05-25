import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function RightIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="-4 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="m1 1 10.001 9.002L1 19.004"
      stroke={props.color}
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
