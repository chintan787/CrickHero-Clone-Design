import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function AccordianDownArrow(props) {
  return (
    <Svg
    width={props.height}
    height={props.width}
    viewBox="0 0 1024 1024"
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
   fill={props.color}
  >
    <Path d="M903.232 256 960 306.432 512 768 64 306.432 120.768 256 512 659.072z" />
  </Svg>
  )
}
