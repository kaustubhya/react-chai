import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// 1. Let us create a store first, for that, go to src/app/store.js
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='flex justify-center pt-10'>
    <h1 className='text-3xl font-bold text-black'>ADD YOUR TODOS HERE IN THIS TODO WEBSITE</h1>

    </div>
    <div className='flex justify-center'>

    <AddTodo />

    </div>
    <Todos />
    </>
    // Now just like in Context API, we need to wrap all of this in a Provider
    // 8. For that go to main.jsx
  )
}

export default App
