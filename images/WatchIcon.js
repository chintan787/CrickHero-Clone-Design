import React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

export default function WatchIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={4}
    stroke={props.color}
    fill="none"
  >
    <Rect x={9.19} y={11.28} width={47.34} height={34.38} rx={2.02} />
    <Path d="M9.19 39.12h47.34M23.92 53.64a6.67 6.67 0 0 0 3.54-8M42.7 53.64a6.67 6.67 0 0 1-3.54-8" />
    <Path strokeLinecap="round" d="M18.36 53.64h29" />
    <Path d="M29.68 31.44V19.78a.27.27 0 0 1 .41-.23l9.17 5.83a.27.27 0 0 1 0 .46l-9.17 5.82a.26.26 0 0 1-.41-.22Z" />
  </Svg>
  )
}
