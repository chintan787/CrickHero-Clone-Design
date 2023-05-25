import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function BookingIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
      stroke={props.color}
    />
  </Svg>
  )
}
