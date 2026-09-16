import { useState } from 'react'
import styles from './ItemCount.module.css'

function ItemCount({ stock, initial = 0, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount((currentCount) => currentCount + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount((currentCount) => currentCount - 1)
    }
  }

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count)
    }
  }

  return (
    <div className={styles.itemCount}>
      <button type="button" onClick={decrement} disabled={count === 0}>
        -
      </button>

      <span>{count}</span>

      <button type="button" onClick={increment} disabled={count === stock}>
        +
      </button>

      <button
        type="button"
        onClick={handleAdd}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount