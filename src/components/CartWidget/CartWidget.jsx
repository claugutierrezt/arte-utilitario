import styles from './CartWidget.module.css'

function CartWidget() {
  return (
    <div className={styles.cartWidget} aria-label="Carrito con 3 productos">
      <span aria-hidden="true">🛒</span>
      <span>3</span>
    </div>
  )
}

export default CartWidget
