import React from "react";
function Increment({ setCount, count }) {
  return (
    <button onClick={() => setCount(count + 1)}>Increment</button>
  )
}
export default Increment