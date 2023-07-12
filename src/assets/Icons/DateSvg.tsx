import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function DateSvg(props: any) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 10V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9m16 0H4m4-7v4m8-4v4"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect x={6} y={12} width={3} height={3} rx={0.5} fill="#000" />
      <Rect x={10.5} y={12} width={3} height={3} rx={0.5} fill="#000" />
      <Rect x={15} y={12} width={3} height={3} rx={0.5} fill="#000" />
    </Svg>
  )
}

export default DateSvg