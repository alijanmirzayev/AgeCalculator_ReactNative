import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DotSvg(props: any) {
  return (
    <Svg
      width="26px"
      height="32px"
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-dot"
      {...props}
    >
      <Path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  )
}

export default DotSvg