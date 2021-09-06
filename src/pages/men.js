import React from "react"
import Products from "../components/Products"
export const query = graphql`
  query GET_MEN {
    allStripePrice(
      filter: { product: { metadata: { gender: { eq: "male" } } } }
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

const men = ({ data }) => {
  return (
    <div>
      <Products products={data.allStripePrice.edges} />
    </div>
  )
}

export default men
