import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

import { db } from '../../firebase/config'
import ItemList from '../../components/ItemList/ItemList'
import styles from './ItemListContainer.module.css'

function ItemListContainer({ greeting }) {
  const { id } = useParams()

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const productsCollection = collection(db, 'products')

        const productsQuery = id
          ? query(productsCollection, where('category', '==', id))
          : productsCollection

        const snapshot = await getDocs(productsQuery)

        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setItems(products)
      } catch (error) {
        console.error(error)
        setError('No se pudieron cargar los productos.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [id])

  if (error) {
    return (
      <section className={styles.container}>
        <p>{error}</p>
      </section>
    )
  }

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