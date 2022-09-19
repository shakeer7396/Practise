import React from 'react'

const Counter = () => {
    const [counter,setCounter] = React.useState(5);

    const handleClick= (value)=>{
        setCounter(counter+value)
    }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() =>handleClick(5)}>Add</button>
        <button onClick={() =>handleClick(-5)}>Delete</button>
    </div>
  )
}

export default Counter