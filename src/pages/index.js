import React from "react"
import { graphql, Link } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import { StyledGenderSelector } from "../styles/components"

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
          price: unit_amount
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
      <StyledGenderSelector>
        <article>
          <Link to="/men">
            <StaticImage
              className="imageJumbo"
              src="https://media.kunastores.com/world/category-backgrounds/Portada-secundaria-INT-HOMBRE.jpg"
              alt="icon"
              placeholder="blurred"
              layout="constrained"
            />

            <p>FOR MEN</p>
          </Link>
        </article>
        <article>
          <Link to="/women">
            <StaticImage
              className="imageJumbo"
              src="https://media.kunastores.com/world/category-backgrounds/Portada-secundaria-INT-MUJER.jpg"
              alt="icon"
              placeholder="blurred"
              layout="constrained"
            />

            <p>FOR WOMEN</p>
          </Link>
        </article>
        <article>
          <Link to="/blanket">
            <StaticImage
              className="imageJumbo"
              src="https://media.kunastores.com/world/category-backgrounds/04c_Home_0.jpg"
              alt="icon"
              placeholder="blurred"
              layout="constrained"
            />

            <p>BLANKETS</p>
          </Link>
        </article>
      </StyledGenderSelector>
    </>
  )
}

export default IndexPage
