import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useAuth } from '../../context/AuthContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <img
          src="/img/logo.png"
          alt="Arte Utilitario"
          className={styles.logo}
        />
      </NavLink>

      <div className={styles.links}>
        <NavLink to="/category/viajes">Viajes</NavLink>
        <NavLink to="/category/musicos">Músicos</NavLink>
        <NavLink to="/category/momentos">Momentos</NavLink>
      </div>

      <div className={styles.actions}>
        {user ? (
          <>
            <span className={styles.userEmail}>
              {user.email}
            </span>

            <button
              type="button"
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={styles.loginLink}
          >
            Iniciar sesión
          </NavLink>
        )}

        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar