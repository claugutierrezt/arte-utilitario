
import { createContext, useContext } from 'react'

// Contexto global del carrito
export const CartContext = createContext(null)

// Hook para acceder a las funciones y datos del carrito
export function useCart() {
  return useContext(CartContext)
}
