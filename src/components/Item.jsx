function Item({ product }) {
  return (
    <article className="item-card">
      <img
        src={product.img}
        alt={product.name}
        className="item-card__image"
      />

      <div className="item-card__content">
        <p className="item-card__category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="item-card__price">
          ${product.price}
        </p>
      </div>
    </article>
  )
}

export default Item