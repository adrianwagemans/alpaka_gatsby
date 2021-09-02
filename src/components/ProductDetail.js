import React, { useState } from "react"

import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"

import { SEO } from "."
import priceFormat from "../utils/priceFormat"

const ProductDetail = props => {
  const formatedPrice = priceFormat(props.unit_amount)
  console.log(props.product.metadata.wear)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={props.product.name} />
      <img src={props.product.images} alt={props.product.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{props.product.name}</h2>
        <b>{formatedPrice}</b>
        {props.product.metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
