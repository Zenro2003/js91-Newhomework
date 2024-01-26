// Home.js
import React, { useState, useEffect } from 'react';
import TodoList from '../../components/Todolist';
import TODOS from '../../data/todos';

const Todo = () => {
  const [todos, setTodos] = useState([]);
                                
  useEffect(() => {
    // Trong ví dụ này, sử dụng danh sách todos từ file TODOS
    setTodos(TODOS);
  }, []);

  return (
    <div className="Todo">
      <h2>Todo</h2>
      {/* Hiển thị danh sách các todo */}
      <TodoList todos={todos} />
      {/* Các nội dung khác nếu cần */}
    </div>
  );
};

export default Todo;
