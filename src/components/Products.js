import React from "react"
import { Link } from "gatsby"
import formatprice from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

export default function Products({ products }) {
  return (
    <>
      <StyledProducts>
        <h2>Products</h2>
        <section>
          {products.map(({ node }) => {
            const productPrice = formatprice(node.price)

            return (
              <article key={node.id}>
                <img src={node.product.images} alt={node.product.name} />
                <p>{node.product.name}</p>
                <small>EUR {productPrice}</small>
                <Link to={`/${node.id}`}>Buy now</Link>
              </article>
            )
          })}
        </section>
      </StyledProducts>
    </>
  )
}
