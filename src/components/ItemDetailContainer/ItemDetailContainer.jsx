import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../mock/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'

function ItemDetailContainer() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setProduct(null)
    setError(null)

    getProductById(id)
      .then((productFound) => {
        setProduct(productFound)
      })
      .catch((requestError) => {
        setError(requestError.message)
      })
  }, [id])

  if (error) {
    return <p>{error}</p>
  }

  if (!product) {
    return <p>Cargando producto...</p>
  }

  return (
    <section className={styles.detailSection}>
      <ItemDetail product={product} />
    </section>
  )
}

export default ItemDetailContainer