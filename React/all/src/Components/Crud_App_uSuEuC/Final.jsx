import React from 'react'
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskProvider from "./TaskContext";

const Final = () => {
    return (
        <div>
            <TaskProvider>
                <h2>Task List</h2>
                <TaskInput />
                <TaskList />
            </TaskProvider>
        </div>
    )
}

export default Final