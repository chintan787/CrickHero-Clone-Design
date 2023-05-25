import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function PlayButton() {
  return (
    <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  
  >
    <Path
      d="M8 6v12l10-6L8 6Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
  )
}
