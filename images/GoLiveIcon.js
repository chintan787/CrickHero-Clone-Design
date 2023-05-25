import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function GoLiveIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
   
  >
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={12}
      d="M22 126V42a4 4 0 0 1 4-4h140a4 4 0 0 1 4 4v84a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M52 154h88"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M118 84 82 62v44l36-22Z"
    />
  </Svg>
  )
}
