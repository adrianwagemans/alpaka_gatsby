import React from "react"
import { ProductDetail } from "../components"

const Product = ({ pageContext }) => {
  return <ProductDetail {...pageContext} />
}

export default Product
