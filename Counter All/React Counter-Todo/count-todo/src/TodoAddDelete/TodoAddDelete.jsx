import React, {useState} from 'react';
const TodoAddDelete = () =>{
    const [task,setTask] = useState('');
    const [data,setData] = useState([]);

    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const handleAdd=(e)=>{
        if(task.trim()){
            setData([...data,{id:Date.now() ,text:task}]);
            setTask('');
        }
    }
    const handleDelete=(id)=>{
        setData(data.filter((task)=>task.id!==id))
    }

    return(
        <>
        <div className="container">
            <h1>Todo Add Delete</h1>
            <input type="text" placeholder="Add Something" value={task} onChange={handleChange} />
            <button onClick={handleAdd}>Add Task</button>
        </div>
        <ol className="task-list" >   
            {data.map((task)=>(
                <li key={task.id} >
                    <span>{task.text}</span>
                    <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    </li>
            ))}
            </ol>
        </>
    )
}
export default TodoAddDelete;