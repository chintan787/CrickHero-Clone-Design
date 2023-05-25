import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function MenuIcon() {
  return (
    <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M4 17h16M4 12h16M4 7h16"
      stroke="#717880"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
