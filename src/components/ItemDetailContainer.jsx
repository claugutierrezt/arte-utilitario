import { useEffect, useState } from 'react'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProductById('1')
      .then((productFound) => {
        setProduct(productFound)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  if (!product) {
    return <p>Cargando producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer