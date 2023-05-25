import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function RightArrowWithRoundedBorder(props) {
   
  return (
    <Svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" >
    <Path
      fill={props.color}
      d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 1.395a8.605 8.605 0 1 0 0 17.21 8.605 8.605 0 0 0 0-17.21Zm-1.251 4.25 3.87 3.972a.682.682 0 0 1-.005.957l-3.87 3.895a.682.682 0 1 1-.967-.961l3.397-3.42-3.402-3.49a.682.682 0 1 1 .977-.952Z"
    />
  </Svg>
  )
}
