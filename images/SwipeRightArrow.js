import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function SwipeRightArrow() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M13 16.25a.74.74 0 0 1-.53-.22.75.75 0 0 1 0-1.06l3-3-3-3A.75.75 0 0 1 13.53 8l3.5 3.5a.75.75 0 0 1 0 1.06L13.53 16a.74.74 0 0 1-.53.25ZM7.5 16.25A.75.75 0 0 1 7 15l3-3-3-3a.75.75 0 0 1 1-1l3.5 3.5a.75.75 0 0 1 0 1.06L8 16a.74.74 0 0 1-.5.25Z"
      fill="#15B293"
    />
  </Svg>
  )
}
