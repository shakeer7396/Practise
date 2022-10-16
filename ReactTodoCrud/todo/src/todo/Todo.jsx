import React, { useState } from 'react'

const Todo = ({todo,onEdit,onDelete}) => {

    const [edit,setEdit]=useState(false);
    const [value,setValue]=useState(todo.value);

    const deleteData=async()=>{
        await fetch(`http://localhost:6040/posts/${todo.id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })
        onDelete(todo.id)
    }

    const editData=async()=>{
      let res=await fetch(`http://localhost:6040/posts/${todo.id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            value,
            completed:true,
        }),
      })
      let data=await res.json();
      onEdit(data);
    }


  return (
    <div>
        {edit?(
            <div>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
                <button onClick={()=>{
                    let add=value.trim();
                    if(add){
                        editData(add)
                        setEdit(false)
                        setValue('')
                    }
                }}>Update</button>
            </div>
        )
        :(<div>{todo.value}</div>)}
        <button onClick={()=>setEdit(!edit)}>Edit</button>
        <button onClick={deleteData}>Delete</button>
    </div>
  )
}

export default Todo