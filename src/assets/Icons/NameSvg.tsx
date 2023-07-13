import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function NameSvg(props: any) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={6} r={4} fill="#1C274C" />
      <Path
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5z"
        fill="#1C274C"
      />
    </Svg>
  )
}

export default NameSvg