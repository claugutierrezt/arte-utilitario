import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import styles from './CartWidget.module.css'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link
      to="/cart"
      className={styles.cartWidget}
      aria-label={`Carrito con ${totalItems} productos`}
    >
      <span aria-hidden="true">🛒</span>
      <span>{totalItems}</span>
    </Link>
  )
}

export default CartWidget