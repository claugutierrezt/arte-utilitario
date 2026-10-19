
import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import { auth } from '../firebase/config'
import { AuthContext } from './useAuth'

// Proveedor global de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Registrar usuario
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Iniciar sesión
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Cerrar sesión
  const logout = () => {
    return signOut(auth)
  }

  // Mantener sincronizado el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
