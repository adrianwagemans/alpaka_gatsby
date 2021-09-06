/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { StaticQuery, graphql } from "gatsby"
import { Content, Footer } from "../styles/components"

import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <div className="main">
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
    </div>
    <Footer>
      © 2021 develop by
      <a href="https://www.adrianwagemans.com">Adrian Wagemans</a>
    </Footer>
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
