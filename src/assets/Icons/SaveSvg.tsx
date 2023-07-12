import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SaveSvg(props: any) {
  return (
    <Svg
      width="28px"
      height="28px"
      viewBox="0 0 64 64"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M45.35 6.17H19.41a9.8 9.8 0 00-9.78 9.78v36.32a5.885 5.885 0 009.42 4.72l12.2-9.14a1.905 1.905 0 012.27 0l12.19 9.13a5.882 5.882 0 009.42-4.71V15.95a9.8 9.8 0 00-9.78-9.78z"
      />
    </Svg>
  )
}

export default SaveSvg