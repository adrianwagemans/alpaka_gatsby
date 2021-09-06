import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <StaticImage
          id="logo"
          src="../images/alpacalogo.jpg"
          alt="logo"
          placeholder="blurred"
          layout="constrained"
          width={100}
          style={{ borderRadius: "25px", height: "80px" }}
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://www.adrianwagemans.com">Adrian</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img alt="cart" src="https://i.postimg.cc/L6wpMxLt/cart.png" />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
