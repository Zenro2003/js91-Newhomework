import { useState } from 'react';
import './style.css';
const AddTodo = ({onAddTask}) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const handleAddClick = () => {
        setIsAdding(!isAdding);
    };
    const handleSave = () => {
        // Kiểm tra nếu newTodo không trống trước khi lưu
        if (newTodo.trim() !== '') {
          onAddTask(newTodo); // Gọi hàm của component cha để thêm công việc mới
          setNewTodo(''); // Đặt lại state newTodo
          setIsAdding(false); // Ẩn form thêm công việc
        }
      };
    return (
        <div className='add-todo'>

            {isAdding ? (
                <div className='show-add'>
                    <div className='add-cm'>
                        <div className='add-action'>
                            <div className='add-inp'>
                                <input type='text' placeholder="What are you working on?" className='inp-todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div className='add-cm'>
                        <div className='add-action'>
                            <div className='add-inp'>

                            </div>
                        </div>
                    </div>
                    <div className='btn-scd'>
                        {/* <button class="btn-delete">Delete</button> */}
                        <div className='cancel-save'>
                            <button class="btn-cancel" onClick={handleAddClick}>Cancel</button>
                            <button class="btn-save" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            ) : (
               <button className="btn-add" onClick={handleAddClick}>
                  <i class="fa-solid fa-circle-plus"></i> 
                  <div className='sc-add'>Add Task</div>             
               </button>
           )}
        </div>

    );
}
export default AddTodo;