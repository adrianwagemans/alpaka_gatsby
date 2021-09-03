import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      className="imageJumbo"
      src="../images/AdobeStock_100020881-730x487.jpeg"
      alt="icon"
      placeholder="blurred"
      layout="constrained"
    />
  )
}

export default Image
