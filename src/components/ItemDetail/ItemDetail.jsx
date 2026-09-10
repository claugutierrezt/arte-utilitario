import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

function ItemDetail({ product }) {
  return (
    <article className={styles.detail}>
      <div className={styles.imageWrapper}>
        <img src={product.img} alt={product.name} />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h2>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.stock}>Stock disponible: {product.stock}</p>
        <ItemCount stock={product.stock} />
      </div>
    </article>
  )
}

export default ItemDetail
