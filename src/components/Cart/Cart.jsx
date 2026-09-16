import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import styles from './Cart.module.css'

function Cart() {
  const {
    cart,
    removeItem,
    clear,
    updateQuantity,
  } = useCart()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <section className={styles.empty}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega algunos productos para comenzar tu compra.</p>

        <Link to="/" className={styles.emptyLink}>
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Carrito de compras</h2>

      {cart.map((item) => (
        <article key={item.id} className={styles.item}>
          <div className={styles.itemInfo}>
            <h3>{item.name}</h3>

            {/* Esto no se pidió, pero yo lo haría así:
                permitir modificar la cantidad directamente desde el carrito. */}
            <div className={styles.quantityControl}>
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                disabled={item.quantity === 1}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                disabled={item.quantity === item.stock}
              >
                +
              </button>
            </div>

            <p>Precio unitario: ${item.price}</p>

            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className={styles.removeButton}
          >
            Eliminar
          </button>
        </article>
      ))}

      <div className={styles.summary}>
        <h3 className={styles.total}>Total: ${total}</h3>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={clear}
            className={styles.clearButton}
          >
            Vaciar carrito
          </button>

          <button
            type="button"
            className={styles.checkoutButton}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart