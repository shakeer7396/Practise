import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Counter App</h1>
        <div>
            <h2>{count}</h2>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>

    </div>
  )
}

export default Counter