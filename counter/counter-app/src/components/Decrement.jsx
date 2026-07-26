import react from 'react'
function Decrement({ setCount, count }) {
  return (
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  )
}
export default Decrement