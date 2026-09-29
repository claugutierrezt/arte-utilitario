import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Login.module.css'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError('No se pudo iniciar sesión. Revisa tu correo y contraseña.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Mi cuenta</p>

        <h1>Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>

        <p className={styles.registerText}>
          ¿Todavía no tienes cuenta?{' '}
          <Link to="/register">
            Regístrate
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login