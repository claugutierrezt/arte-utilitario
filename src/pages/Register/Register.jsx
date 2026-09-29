import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Register.module.css'

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setLoading(true)

    try {
      await register(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError('No se pudo crear la cuenta. Revisa los datos ingresados.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Mi cuenta</p>

        <h1>Crear cuenta</h1>

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
              minLength="6"
              required
            />
          </label>

          <label>
            Confirmar contraseña
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength="6"
              required
            />
          </label>

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </button>
        </form>

        <p className={styles.loginText}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login">
            Inicia sesión
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Register