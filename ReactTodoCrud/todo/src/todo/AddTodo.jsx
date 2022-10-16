import React from 'react'
import { useState } from 'react'

const AddTodo = ({mount}) => {
    const [add,setAdd]=useState("")

    const change=(e)=>{
        setAdd(e.target.value)
    }
    const postTodo=async(value)=>{
        let res=await fetch("http://localhost:6040/posts",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                value,
                completed:false,
            }),
        })
        let data=await res.json();
        mount(data);
        console.log(data)
    }


  return (
    <div>
        <input type="text" value={add} onChange={change} />
        <button onClick={()=>{
           if(add){
                postTodo(add);
                setAdd('')
           }
        }}>Save</button>
    </div>
  )
}

export default AddTodo