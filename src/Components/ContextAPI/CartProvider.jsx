import React, { createContext, useState } from 'react'

export let CartContext = createContext()

const CartProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
