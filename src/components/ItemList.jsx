import Item from './Item'

function ItemList({ items }) {
  if (items.length === 0) {
    return <p className="loading-message">Cargando productos...</p>
  }

  return (
    <section className="product-list" aria-label="Listado de productos">
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ItemList
