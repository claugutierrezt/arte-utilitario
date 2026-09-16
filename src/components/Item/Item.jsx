import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import styles from './Item.module.css'

function Item({ product }) {
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  // Esto no se pidió, pero yo lo haría así:
  // permitir seleccionar la cantidad directamente desde el catálogo.
  const increment = () => {
    if (quantity < product.stock) {
      setQuantity((currentQuantity) => currentQuantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((currentQuantity) => currentQuantity - 1)
    }
  }

  const handleAdd = () => {
    addItem(product, quantity)
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  return (
    <article className={styles.card}>
      <Link to={`/item/${product.id}`} className={styles.cardLink}>
        <img
          src={product.img}
          alt={product.name}
          className={styles.image}
        />

        <div className={styles.content}>
          <p className={styles.category}>{product.category}</p>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.price}>${product.price}</p>
        </div>
      </Link>

      <div className={styles.purchase}>
        <div className={styles.quantityControl}>
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === product.stock}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`${styles.cardButton} ${
            added ? styles.cardButtonAdded : ''
          }`}
        >
          {added ? 'Producto agregado' : 'Agregar al carrito'}
        </button>
      </div>
    </article>
  )
}

export default Item