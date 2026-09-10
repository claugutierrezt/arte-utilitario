import Item from '../Item/Item'
import styles from './ItemList.module.css'

function ItemList({ items, loading }) {
  if (loading) {
    return <p className={styles.message}>Cargando productos...</p>
  }

  if (items.length === 0) {
    return <p className={styles.message}>No hay productos disponibles.</p>
  }

  return (
    <section className={styles.productList} aria-label="Listado de productos">
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ItemList
