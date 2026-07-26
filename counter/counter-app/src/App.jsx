import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Reset from './components/Reset'  

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Counter App</h1>
    <p>count: {count}</p>
    <Increment setCount={setCount} count={count} />
    <Decrement setCount={setCount} count={count} />
    <Reset setCount={setCount} count={count} />
    </>
  )
}

export default App
