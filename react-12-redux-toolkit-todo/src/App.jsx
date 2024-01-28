import { useState } from 'react'

// 1. Let us create a store first, for that, go to src/app/store.js
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux Toolkit starts.</h1>
    </>
  )
}

export default App
