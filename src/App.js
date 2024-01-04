import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import UserForm from "./components/UserForm";
import TotalUser from "./components/TotalUser";
import TodoList from "./components/Todolist";


function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (newUser) => {
    // Thêm user mới vào danh sách users
    // Thêm mới user sau khi bấm submit
    setUsers([...users, newUser]);
    console.log(newUser);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>User Form</h1>
        <UserForm onFormSubmit={handleFormSubmit} />

        <h1>Total Users</h1>
        <TotalUser users={users} /> */}
        <TodoList/>

      </header>
    </div>
  );
}

export default App;
