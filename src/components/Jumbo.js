import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "./"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue el mejor swag exclusivo de adrancito.com</h2>
        <small>{description}</small>
      </div>
      <Image />
    </StyledJumbo>
  )
}

export default Jumbo
