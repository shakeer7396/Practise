import React, { createContext, useContext, useEffect, useState } from 'react'

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task }])
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, text: newText } : task));
    }
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {children}
        </TaskContext.Provider>

    )
}

export const useTasks = () => {
    return useContext(TaskContext);
}

export default TaskProvider;

