import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.notFound}>
      <p className={styles.code}>404</p>
      <h1>Página no encontrada</h1>
      <p>La ruta que intentaste abrir no existe.</p>

      <Link to="/" className={styles.link}>
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound