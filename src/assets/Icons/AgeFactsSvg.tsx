import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AgeFactsSvg(props: any) {
  return (
    <Svg
      width="26px"
      height="26px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.63 4.81A9.23 9.23 0 0016 2a9 9 0 00-9 9 10.74 10.74 0 001.4 4.78c.26.54.5 1.06.7 1.59l2 5a1 1 0 00.9.63h8a1 1 0 00.93-.63l2-5c.22-.57.46-1.1.7-1.62A12 12 0 0025 11a8.41 8.41 0 00-2.37-6.19z"
        fill="#FBC02D"
      />
      <Path
        d="M20 24h-8a1 1 0 00-1 1v3a1 1 0 00.56.9l2 1a1 1 0 00.44.1h4a1 1 0 00.45-.1l2-1A1 1 0 0021 28v-3a1 1 0 00-1-1z"
        fill="#FF6F00"
      />
      <Path
        d="M20 14h-8a1 1 0 01-.85-.47 1 1 0 010-1l2-4A1 1 0 0114 8h4a1 1 0 110 2h-3.35l-1 2H20a1 1 0 010 2z"
        fill="#FAFAFA"
      />
      <Path
        d="M16 18a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1z"
        fill="#FAFAFA"
      />
      <Path
        d="M16 2a9 9 0 00-9 9 10.86 10.86 0 001.37 4.77c.26.52.494 1.055.7 1.6l2 5A1 1 0 0012 23h4V2z"
        fill="#FFEE58"
      />
      <Path
        d="M12 24a1 1 0 00-1 1v3a1 1 0 00.55.89l2 1A1 1 0 0014 30h2v-6h-4z"
        fill="#FF8F00"
      />
      <Path
        d="M18 10a1 1 0 100-2h-2v2h2zM20 12h-4v2h4a1 1 0 000-2z"
        fill="#FF6F00"
      />
      <Path
        d="M13.6 12l1-2H16V8h-2a1 1 0 00-.9.55l-2 4a1 1 0 00.05 1A1 1 0 0012 14h4v-2h-2.4z"
        fill="#FF8F00"
      />
      <Path d="M15 13v4a1 1 0 001 1v-6a1 1 0 00-1 1z" fill="#FF8F00" />
      <Path d="M16 12v6a1 1 0 001-1v-4a1 1 0 00-1-1z" fill="#FF6F00" />
    </Svg>
  )
}

export default AgeFactsSvg