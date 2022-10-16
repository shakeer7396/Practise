import React, { useState } from 'react'
import { useEffect } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo';

const Todos = () => {
    const [todo,setTodo]=useState([]);
    const [page,setPage]=useState(1)

    const mount =(add)=>{
        //Post method passing and taking with props
        setTodo([...todo,add])
    }

    //Getting data method
    const getData=async()=>{
        try{
            let res=await fetch(`http://localhost:6040/posts?_page=${page}`)
        let data=await res.json();
        console.log("Output",data);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
    },[page])

    const onDelete =(id)=>{
        const updatedTodo=todo.filter((item)=>item.id !==id);
        setTodo(updatedTodo);
    }
    const onEdit =(data)=>{
        const updatedTodo =todo.map((item)=>{
            if(item.id==data.id){
                return data;
            }
            else{
                return item;
            }
        })
        setTodo(updatedTodo);
    }
  return (
    <div> 
        <AddTodo mount={mount}/>
        {todo.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))}
        <h2>Page : {page}</h2>
        <button onClick={()=>{
            if(page>1){
                setPage(page-1);
            }
        }}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>

    </div>
  )
}

export default Todos

