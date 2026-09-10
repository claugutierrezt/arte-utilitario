import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import styles from './Navbar.module.css'

function Navbar() {
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

      <CartWidget />
    </nav>
  )
}

export default Navbar