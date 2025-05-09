
import React,{useState} from 'react';

const Counter = () =>{
const [count,setCount] = useState(0);
  return(
    <div>
      <h1>Counter : { count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count>1?count-1:0)}>Decrement</button>
      <button onClick={() => setCount(count > 0 ? 0 : 0)}>Reset</button>
    </div>
  )
}
export default Counter;