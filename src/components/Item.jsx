function Item({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img className="product-image" src={product.img} alt={product.name} />
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <strong className="product-price">${product.price} MXN</strong>
          <span className="product-stock">Stock: {product.stock}</span>
        </div>
      </div>
    </article>
  )
}

export default Item
