import { useState } from 'react'

function ItemCount({ stock, initial = 0 }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <button type="button" onClick={decrement}>
        -
      </button>

      <span>{count}</span>

      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default ItemCount