import React from 'react'
import { TaskItem } from './TaskItem';

const Todo = () => {
 
  const [query,setQuery] = React.useState("");
  const [tasks,setTasks] =React.useState([])

  const handleChange = (e) =>{
   const {value}= e.target;
   setQuery(value);
  }

  const handleAdd = () =>{
    const payload={
      id:1,
      title:query,
      status:true
    }
    let newTasks=[...tasks,payload]
    setTasks(newTasks);
  }
  console.log(tasks)
  return (
    <>
    <div>
        <h1>Todo</h1>
        <input placeholder='write something' value={query} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
    </div>
    <div>
      {tasks.map ((item,index)=>{
        return <div><TaskItem color={index%2===0 ? "blue" :"green"} fontSize={"40px"}{...item}/></div>
      })}
    </div>
    </>
  )
}

export  {Todo}