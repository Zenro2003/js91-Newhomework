import React from 'react';
import './style.css'; // Import file CSS

const TodoItem = ({ todo, onComplete, onDelete }) => {
  const handleCheckboxChange = () => {
    onComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="task"> {/* Áp dụng class 'task' */}
      <input
        type="checkbox" 
        checked={todo.isCompleted}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.todo}
      </span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default TodoItem;
