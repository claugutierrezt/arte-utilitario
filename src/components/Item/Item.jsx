import { Link } from 'react-router-dom'
import styles from './Item.module.css'

function Item({ product }) {
  return (
    <Link to={`/item/${product.id}`} className={styles.cardLink}>
      <article className={styles.card}>
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
      </article>
    </Link>
  )
}

export default Item