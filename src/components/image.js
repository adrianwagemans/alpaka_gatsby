import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      src="../images/icon.png"
      alt="icon"
      placeholder="blurred"
      layout="constrained"
    />
  )
}

export default Image
