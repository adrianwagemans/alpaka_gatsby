import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"
import Products from "../components/Products"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }

    allStripePrice {
      edges {
        node {
          product {
            images
            description
            metadata {
              wear
            }
            name
          }
          unit_amount
          id
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
