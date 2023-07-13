import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/Colors"

function ShareSvg(props: any) {
  return (
    <Svg
      width="26px"
      height="26px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill={COLORS.LIGHT.headerBackground} d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6a4 4 0 11.983 2.627l-5.07 2.535a4.015 4.015 0 010 1.676l5.07 2.536S16.796 14 18 14a4 4 0 11-3.912 3.162l-5.071-2.535a4 4 0 110-5.253l5.07-2.536A4.017 4.017 0 0114 6z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default ShareSvg