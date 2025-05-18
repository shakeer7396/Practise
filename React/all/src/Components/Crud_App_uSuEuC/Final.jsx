import React from 'react'
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskProvider from "./TaskContext";
import ApiFetch from './ApiFetch';

const Final = () => {
    return (
        <div>
            <TaskProvider>
                <h2>Task List</h2>
                <TaskInput />
                <TaskList />
                <ApiFetch />
            </TaskProvider>
        </div>
    )
}

export default Final