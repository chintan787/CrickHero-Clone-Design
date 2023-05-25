import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function MoreDotsIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.005 16.005v-.01M12.005 12.005v-.01M12.005 8.005v-.01"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
