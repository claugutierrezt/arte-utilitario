import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'

function ItemListContainer({ greeting }) {
  const { id } = useParams()

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)

      try {
        const products = await getProducts()

        if (id) {
          const filteredProducts = products.filter(
            (product) => product.category === id
          )

          setItems(filteredProducts)
        } else {
          setItems(products)
        }
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [id])

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Colección</p>

        <h1>{greeting}</h1>

        <p className={styles.intro}>
          Portavasos artesanales creados para acompañar historias, música y momentos.
        </p>
      </div>

      <ItemList items={items} loading={loading} />
    </section>
  )
}

export default ItemListContainer  
