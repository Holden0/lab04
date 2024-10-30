import React, { useState } from 'react';
import Task from '../components/Task'; 
import TaskForm from '../components/TaskForm';

function ToDoList() {
    const [tasks, setTasks] = useState([
        { name: "Task 1", completed: false },
        { name: "Task 2", completed: false },
        { name: "Task 3", completed: false }
    ]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { name: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index); 
        setTasks(updatedTasks);
    }

    function toggleTask(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    const remainingTasksCount = tasks.filter(task => !task.completed).length;

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true; 
    });

    return (
        <div className="container">
            <div className="to-do-list">
                <h1>To Do List</h1>
                <h2>{remainingTasksCount} tasks remaining</h2> 
                <TaskForm 
                    newTask={newTask} 
                    handleInputChange={handleInputChange} 
                    addTask={addTask} 
                />

                <div className="filter-buttons">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('pending')}>Pending</button>
                    <button onClick={() => setFilter('completed')}>Completed</button>
                </div>

                <ol>
                    {filteredTasks.map((task, index) => (
                        <Task 
                            key={index} 
                            task={task} 
                            index={index} 
                            toggleTask={toggleTask}
                            deleteTask={deleteTask} 
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
