import React from 'react';

function TaskForm({ newTask, handleInputChange, addTask }) {
    return (
        <div className="top-section">
            <input 
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>
                Add
            </button>
        </div>
    );
}

export default TaskForm;