import React from "react"
import Products from "../components/Products"
export const query = graphql`
  query GET_WOMAN {
    allStripePrice(
      filter: { product: { metadata: { gender: { eq: "female" } } } }
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

const women = ({ data }) => {
  return (
    <div>
      <Products products={data.allStripePrice.edges} />
    </div>
  )
}

export default women
