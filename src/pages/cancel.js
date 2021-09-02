import React from "react"
import { SEO } from "../components"
import { Purchase, Button } from "../styles/components"
import { Link } from "gatsby"

const cancel = () => {
  return (
    <div>
      <SEO title="cancelacion de compra" />
      <Purchase>
        <h2>Bueno lo sentimos y todo eso</h2>
        <p>volve cuando quieras y compra amigo</p>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default cancel
