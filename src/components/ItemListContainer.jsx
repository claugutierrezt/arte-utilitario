import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts()
      setItems(products)
    }

    loadProducts()
  }, [])

  return (
    <main className="item-list-container">
      <div className="catalog-heading">
        <p className="catalog-eyebrow">Colección</p>
        <h1>{greeting}</h1>
        <p className="catalog-intro">
          Portavasos artesanales creados para acompañar historias, música y momentos.
        </p>
      </div>

      <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer
