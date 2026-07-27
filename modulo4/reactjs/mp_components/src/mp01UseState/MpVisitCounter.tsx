// src/mp01UseState/MpVisitCounter.tsx

import { useState } from 'react'

export default function MpVisitCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
    setCount((prev) => prev + 1)
  }

  function incrementThree() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Visitas del dia: {count}</p>
      <button onClick={increment}>+1 Visita</button>
      <button onClick={incrementThree}>+3 Visitas</button>
    </div>
  )
}