
import React, { useState } from 'react'

const Counter = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button onClick={()=>setCount(count>1?count-1:0)}>Dec</button>
    </div>
  )
}

export default Counter