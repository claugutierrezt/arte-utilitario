
import { useState } from 'react'
import { CartContext } from './useCart'

// Proveedor global del carrito de compras
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // Agregar productos sin superar el stock disponible
  const addItem = (item, quantity) => {
    const stock = Number(item.stock)

    if (
      !Number.isInteger(stock) ||
      stock <= 0 ||
      !Number.isInteger(quantity) ||
      quantity <= 0
    ) {
      return
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Math.min(
                  cartItem.quantity + quantity,
                  stock
                )
              }
            : cartItem
        )
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: Math.min(quantity, stock)
        }
      ]
    })
  }

  // Eliminar un producto del carrito
  const removeItem = (itemId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (cartItem) => cartItem.id !== itemId
      )
    )
  }

  // Vaciar completamente el carrito
  const clear = () => {
    setCart([])
  }

  // Comprobar si un producto ya está agregado
  const isInCart = (id) => {
    return cart.some(
      (cartItem) => cartItem.id === id
    )
  }

  // Modificar cantidades respetando el stock
  const updateQuantity = (itemId, newQuantity) => {
    setCart((currentCart) =>
      currentCart.map((cartItem) => {
        if (cartItem.id !== itemId) {
          return cartItem
        }

        const stock = Number(cartItem.stock)

        if (!Number.isInteger(stock) || stock <= 0) {
          return cartItem
        }

        return {
          ...cartItem,
          quantity: Math.min(
            Math.max(1, newQuantity),
            stock
          )
        }
      })
    )
  }

  // Cantidad total de unidades del carrito
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
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
