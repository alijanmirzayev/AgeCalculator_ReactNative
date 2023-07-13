import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrowSvg(props: any) {
  return (
    <Svg
      width="26px"
      height="26px"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.707 4.293a1 1 0 010 1.414L6.414 11H20a1 1 0 110 2H6.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
      />
    </Svg>
  )
}

export default LeftArrowSvg
