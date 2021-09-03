import React, { useState, useContext } from "react"

import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"

import { SEO, Stars } from "."
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

const ProductDetail = ({
  unit_amount,
  id,
  product: { name, metadata, images, description },
}) => {
  const formatedPrice = priceFormat(unit_amount)
  console.log(metadata.wear)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)

  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ name, id, unit_amount, description, qty, images })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={images} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>{formatedPrice}</b>
        <Stars />
        <small>{description}</small>
        {metadata.wear && (
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
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
