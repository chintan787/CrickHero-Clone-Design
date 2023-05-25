import React from 'react';
import Svg, { Defs, G, Path } from "react-native-svg"

export default function RateUsIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 -4 30 30"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <Defs></Defs>
    <G data-name="Layer 2" id="Layer_2">
      <G id="Interface-Light">
        <G id="interface-light-rating-stars-2">
          <Path
            className="cls-1"
            d="m9.56 17.48.86 3.19a.63.63 0 0 1-.94.72l-2.64-1.84a.57.57 0 0 0-.68 0l-2.64 1.84a.63.63 0 0 1-.94-.72l.86-3.19a.65.65 0 0 0-.22-.68L.74 14.75a.65.65 0 0 1 .36-1.16l3.16-.13a.63.63 0 0 0 .56-.46l1.1-3.11M24.08 9.92l1.1 3.08a.63.63 0 0 0 .56.43l3.16.13a.65.65 0 0 1 .36 1.16l-2.48 2.08a.65.65 0 0 0-.22.68l.86 3.19a.63.63 0 0 1-.94.72l-2.64-1.84a.57.57 0 0 0-.68 0l-2.64 1.84a.63.63 0 0 1-.94-.72l.58-2.17.28-1M15.58.92 16.68 4a.63.63 0 0 0 .56.43l3.16.13a.65.65 0 0 1 .36 1.16L18.28 7.8a.65.65 0 0 0-.22.68l.86 3.19a.63.63 0 0 1-.94.72l-2.64-1.84a.57.57 0 0 0-.68 0L12 12.39a.63.63 0 0 1-.94-.72l.86-3.19a.65.65 0 0 0-.22-.68l-2.48-2a.65.65 0 0 1 .38-1.21l3.16-.13a.63.63 0 0 0 .56-.46l1.1-3.08a.61.61 0 0 1 1.16 0Z"
          />
        </G>
      </G>
    </G>
  </Svg>
  )
}
