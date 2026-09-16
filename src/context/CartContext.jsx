import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      }

      return [...currentCart, { ...item, quantity }]
    })
  }

  const removeItem = (itemId) => {
    setCart((currentCart) =>
      currentCart.filter((cartItem) => cartItem.id !== itemId)
    )
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.id === id)
  }

  // Esto no se pidió, pero yo lo haría así:
  // permitir modificar la cantidad de un producto directamente desde el carrito.
  const updateQuantity = (itemId, newQuantity) => {
    setCart((currentCart) =>
      currentCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    )
  }

  const totalItems = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        updateQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}