import React from 'react'
import Svg, { Path } from "react-native-svg"

export default function CorrectIcon(props) {
  return (
    <Svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 335.765 335.765"
    xmlSpace="preserve"
  >
    <Path d="M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z" />
  </Svg>
  )
}
