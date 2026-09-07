import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  return (
    <article className="item-detail">
      <div className="item-detail__image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="item-detail__info">
        <p className="item-detail__category">
          {product.category}
        </p>

        <h2>{product.name}</h2>

        <p className="item-detail__price">
          ${product.price}
        </p>

        <p className="item-detail__description">
          {product.description}
        </p>

        <p className="item-detail__stock">
          Stock disponible: {product.stock}
        </p>

        <ItemCount stock={product.stock} />
      </div>
    </article>
  )
}

export default ItemDetail