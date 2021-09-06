import React from "react"
import Products from "../components/Products"
export const query = graphql`
  query GET_BLANKET {
    allStripePrice(
      filter: { product: { metadata: { gender: { eq: "manta" } } } }
    ) {
      edges {
        node {
          product {
            images
            description
            metadata {
              wear
              gender
            }
            name
          }
          price: unit_amount
          id
        }
      }
    }
  }
`

const blanket = ({ data }) => {
  return (
    <div>
      <Products products={data.allStripePrice.edges} />
    </div>
  )
}

export default blanket
