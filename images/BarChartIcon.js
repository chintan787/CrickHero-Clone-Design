import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function BarChartIcon() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 1024 1024"
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M405.333 469.333h213.334V896H405.333zM128 256h213.333v640H128zm554.667-128H896v768H682.667z"
      fill="#AC2011"
    />
  </Svg>
  )
}
