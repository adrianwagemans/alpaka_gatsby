import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const gracias = () => {
  return (
    <div>
      <SEO title="compra Exitosa" />
      <Purchase>
        <h2>Compra exitosa !</h2>
        <p>Espero que disfrutes lo que hayas comprado</p>
        <p>Bueno que tengas un buen dia</p>
        <span rol="img" aria-label="emoji">
          :smile:
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default gracias
