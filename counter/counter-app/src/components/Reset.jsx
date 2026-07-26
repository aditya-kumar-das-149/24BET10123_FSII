import react from 'react'
function Reset({ setCount , count }) {
  return (
    <button onClick={() => setCount(0)}>Reset</button>
  )
}
export default Reset    