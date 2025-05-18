import React, { useState } from 'react'
import { useTasks } from './TaskContext';

const TaskInput = () => {
    const [task, setTask] = useState("");
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            addTask(task);
            setTask("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a Task ..' value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default TaskInput

