import React, { useState } from 'react'
import { useTasks } from './TaskContext'

const TaskList = () => {
    const { tasks, deleteTask, editTask } = useTasks();
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEdit = (id, text) => {
        setEditId(id);
        setNewText(text);
    }


    const handleSave = (id) => {
        editTask(id, newText);
        setEditId(null);
        setNewText("");
    }


    console.log(tasks);
    return (
        <div style={{ marginTop: "40px", padding: "20px", border: "1px solid black", borderRadius: "10px", width: "400px", margin: "auto" }}>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {editId === task.id ? (
                            <>
                                <input type="text" value={newText} placeholder="Enter new text" onChange={(e) => setNewText(e.target.value)} />
                                <button onClick={() => handleSave(task.id)}>💾 Save</button>
                            </>
                        ) : (
                            <>
                                {task.text}
                                <button onClick={() => handleEdit(task.id, task.text)}> ✏️ Edit</button>
                                <button onClick={() => deleteTask(task.id)}>❌</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList