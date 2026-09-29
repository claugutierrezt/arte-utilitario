import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  addDoc,
  collection,
  serverTimestamp
} from 'firebase/firestore'

import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import { db } from '../../firebase/config'
import styles from './Checkout.module.css'

function Checkout() {
  const { user, loading: authLoading } = useAuth()
  const { cart, clear } = useCart()

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  })

  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleChange = (event) => {
    const { name, value } = event.target

    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    if (
      !buyer.name.trim() ||
      !buyer.phone.trim() ||
      !buyer.address.trim() ||
      !buyer.city.trim()
    ) {
      setError('Completa todos los campos obligatorios.')
      return
    }

    if (!user) {
      setError('Debes iniciar sesión para finalizar la compra.')
      return
    }

    if (cart.length === 0) {
      setError('Tu carrito está vacío.')
      return
    }

    setSubmitting(true)

    try {
      const order = {
        userId: user.uid,
        userEmail: user.email,

        buyer: {
          name: buyer.name.trim(),
          phone: buyer.phone.trim(),
          address: buyer.address.trim(),
          city: buyer.city.trim()
        },

        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),

        total,
        createdAt: serverTimestamp()
      }

      const ordersCollection = collection(db, 'orders')
      const orderReference = await addDoc(ordersCollection, order)

      setOrderId(orderReference.id)
      clear()
    } catch (error) {
      console.error(error)
      setError('No se pudo registrar la compra. Intenta nuevamente.')
    } finally {
      setSubmitting(false)
    }
  }

  if (authLoading) {
    return (
      <section className={styles.container}>
        <p>Verificando sesión...</p>
      </section>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (orderId) {
    return (
      <section className={styles.container}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Compra registrada</p>

          <h1>¡Gracias por tu compra!</h1>

          <p>
            Tu orden fue creada correctamente.
          </p>

          <p>
            ID de orden:
          </p>

          <p className={styles.orderId}>
            {orderId}
          </p>
        </div>
      </section>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/" replace />
  }

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Checkout</p>

        <h1>Finalizar compra</h1>

        <p className={styles.user}>
          Compra asociada a: <strong>{user.email}</strong>
        </p>

        <div className={styles.summary}>
          <h2>Resumen de compra</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className={styles.summaryItem}
            >
              <div>
                <strong>{item.name}</strong>
                <p>
                  {item.quantity} × ${item.price}
                </p>
              </div>

              <span>
                ${item.price * item.quantity}
              </span>
            </div>
          ))}

          <div className={styles.total}>
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h2>Datos de entrega</h2>

          <label>
            Nombre y apellido
            <input
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Teléfono
            <input
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Dirección
            <input
              type="text"
              name="address"
              value={buyer.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Ciudad
            <input
              type="text"
              name="city"
              value={buyer.city}
              onChange={handleChange}
              required
            />
          </label>

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? 'Registrando compra...'
              : 'Confirmar compra'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Checkout