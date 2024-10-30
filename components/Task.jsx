import React from 'react';

function Task({ task, index, toggleTask, deleteTask }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed} 
                onChange={() => toggleTask(index)} 
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} 
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
            </button>
        </li>
    );
}

export default Task;