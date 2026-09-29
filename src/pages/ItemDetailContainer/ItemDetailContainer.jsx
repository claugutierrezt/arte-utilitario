import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase/config'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'

function ItemDetailContainer() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      setError(null)

      try {
        const productRef = doc(db, 'products', id)
        const snapshot = await getDoc(productRef)

        if (!snapshot.exists()) {
          setError('El producto no existe.')
          return
        }

        setProduct({
          id: snapshot.id,
          ...snapshot.data()
        })
      } catch (error) {
        console.error(error)
        setError('No se pudo cargar el producto.')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  if (loading) {
    return (
      <section className={styles.container}>
        <p>Cargando producto...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={styles.container}>
        <p>{error}</p>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <ItemDetail product={product} />
    </section>
  )
}

export default ItemDetailContainer