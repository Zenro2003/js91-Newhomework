import { useState } from 'react';
import './style.css'; // Import file CSS
import ThemeContext from '../../context/ThemeContext';


const TodoItem = ({ todo, onComplete, onDelete, onEdit, onEditTask }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onComplete(todo.id);
  };

  const handleEdit = () => {
    setNewTodo(todo.todo);
    (onEdit || function () { })();
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTodo.trim() !== '') {
      onEditTask(todo.id, newTodo); // Gọi hàm của component cha để thêm công việc mới
      setNewTodo(''); // Đặt lại state newTodo
      setIsEditing(false); // Ẩn form thêm công việc
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <ThemeContext.Consumer>
      {(themeContext) => {
        return (
          <div className='todo-item'>
            {!isEditing && (
              <div className='task'>
                <div className={`task-item ${themeContext.theme === "dark" ? "dark" : "light"}`}>
                  <div className='it-task'>
                    <div className='item-left'>
                      <div className='check-left'>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                      </div>
                      <div className='name-todo'>
                        <span className={isChecked ? 'completed' : ''}>
                          {todo.todo}
                        </span>
                      </div>
                    </div>
                    <div className='item-right'>
                      <span className='num-todo'>
                        <span className='num-count'>0/1</span>
                      </span>

                      <div className='btn-edit'>
                        <button onClick={handleEdit}>
                          <i class="fas fa-pen-to-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isEditing && (
              <div className='show-edit'>
                <div className='edit-cm'>
                  <div className='add-action'>
                    <div className='edit-inp'>
                      <input type='text' placeholder="What are you working on?" className='inp-todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <div className='btn-dcs'>
                  <button class="btn-delete" onClick={handleDelete}>Delete</button>
                  <div className='cancel-save'>
<button class="btn-cancel" onClick={handleCancel}>Cancel</button>
                    <button class="btn-save" onClick={handleSave}>Save</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  );
};

export default TodoItem;