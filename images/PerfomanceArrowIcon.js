import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function PerfomanceArrowIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
   
  >
    <Path
      style={{
        fill: props.color,
      }}
      d="m221.258 239.94 97.324 96.826 139.9-139.188 31.938 31.776L512 100.514 382.504 121.99l31.936 31.77-95.858 95.371-97.324-96.826L72.06 300.732l44.042 43.821z"
    />
  </Svg>
  )
}
