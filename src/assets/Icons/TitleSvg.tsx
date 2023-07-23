import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TitleSvg(props: any) {
  return (
    <Svg
      width="22px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 6a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zM5 10a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zM5 14a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zM5 18a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default TitleSvg