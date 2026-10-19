
import { createContext, useContext } from 'react'

// Contexto compartido para la autenticación
export const AuthContext = createContext(null)

// Hook para acceder al usuario y las funciones de autenticación
export const useAuth = () => useContext(AuthContext)
