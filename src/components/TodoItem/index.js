import React from 'react';
import './style.css';

const TodoItem = ({ todo, onComplete, onDelete, isNightMode }) => {
  const handleCheckboxChange = () => {
    onComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className={`task ${todo.isCompleted ? 'completed-task' : ''} `}>
      <div className='task-item'>
        <div className='it-task'>
          <div className='item-left'>
            <div className='check-left'>
              <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckboxChange} />
            </div>
            <div className='name-todo'>
              <span className={todo.isCompleted ? 'completed' : ''}>
                {todo.todo}
              </span>
            </div>
          </div>
          <div className='item-right'>
            <span className='num-todo'>
              <span className='num-count'>0/1</span>
            </span>
            <div className='btn-deleted'>
              <button onClick={handleDelete}>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
