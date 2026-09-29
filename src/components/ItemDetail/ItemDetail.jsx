import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import styles from './ItemDetail.module.css'

function ItemDetail({ product }) {
  const { addItem } = useCart()

  const handleAdd = (quantity) => {
    addItem(product, quantity)
  }

  const imageUrl = `${import.meta.env.BASE_URL}${product.img.replace(/^\//, '')}`

  return (
    <article className={styles.detail}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={product.name}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h2>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.stock}>
          Stock disponible: {product.stock}
        </p>

        <ItemCount
          stock={product.stock}
          onAdd={handleAdd}
        />
      </div>
    </article>
  )
}

export default ItemDetail