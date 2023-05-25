import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function LikeIcon() {
  return (
    <Svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M2 22h16.644a3.036 3.036 0 0 0 3-2.459l1.305-7a2.962 2.962 0 0 0-.637-2.439A3.064 3.064 0 0 0 19.949 9h-4.771V5c0-2.061-2.113-3-4.076-3a1 1 0 0 0-1 1c0 1.907-.34 3.91-.724 4.284L6.593 10H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm6-10.579 2.774-2.7c.93-.907 1.212-3.112 1.3-4.584.542.129 1.109.38 1.109.868v5a1 1 0 0 0 1 1h5.771a1.067 1.067 0 0 1 .824.38.958.958 0 0 1 .21.8l-1.3 7a1.036 1.036 0 0 1-1.044.815H8ZM3 12h3v8H3Z" />
  </Svg>
  )
}
