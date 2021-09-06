import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + current.unit_amount * current.quantity,
        0
      )
    )
  }

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK))

    getTotal()
  }, [])

  const handleBuy = async e => {
    e.preventDefault()
    console.log("eject")

    const { error } = await stripe.redirectToCheckout({
      // lineItems: cart.map(({ unit_amount, quantity }) => ({
      //   price: unit_amount,
      //   quantity: quantity,
      // })),

      lineItems: [{ price: "1515", quantity: 1 }],
      mode: "payment",
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })

    if (error) {
      console.log("error")
      throw error
    }
  }
  const log = () => {
    console.log("button clicked")
    console.log(stripe)
  }

  return (
    <StyledCart>
      <h2>Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.id}>
              <td>
                <img src={swag.images} alt={swag.name} /> {swag.name}
              </td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>EUR {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button
            onClick={() => handleBuy()}
            onClick={() => log()}
            disabled={cart.length === 0}
          >
            Comprar
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
