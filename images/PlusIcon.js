import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function PlusIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M4 12h16m-8-8v16"
      stroke={props.color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
