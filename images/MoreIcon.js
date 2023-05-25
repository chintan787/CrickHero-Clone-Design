import React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

export default function MoreIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 48 48"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Rect
      height={46}
      rx={4}
      ry={4}
      width={46}
      x={1}
      y={1}
      style={{
        fill: "none",
        stroke: props.color,
        strokeLinejoin: "round",
        strokeWidth: 4,
      }}
    />
    <Path
      style={{
        strokeLinecap: "round",
        fill: "none",
        stroke: props.color,
        strokeLinejoin: "round",
        strokeWidth: 4,
      }}
      d="m12 32 12-16 12 16"
    />
  </Svg>
  )
}
