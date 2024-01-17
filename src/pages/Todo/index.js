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

// Client request example.com/students -> server response data (include student list) -> client set state students -> render UI
// CreateReadUpdateDelete -> CRUD
// GET example.com/students -> get student list
// GET example.com/students/1234 -> get student detail with id 1234
// PUT example.com/students/1234 -> edit student with id 1234
// DELETE example.com/students/1234 -> delete student with id 1234
// POST example.com -> create new student