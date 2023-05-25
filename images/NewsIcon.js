import React from 'react';
import Svg, { G, Path } from "react-native-svg";

export default function NewsIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G
      fill="none"
      stroke={props.color}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <Path d="M27 5V3H1v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V5h-4z" />
      <Path d="M5 19h10v8H5zM27 5v19M27 26v2M4 11h20M4 7h20M4 15h20M18 19h6M18 23h6M18 27h6" />
    </G>
  </Svg>
  )
}
