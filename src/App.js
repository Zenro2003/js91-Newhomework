import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Welcome from './pages/Welcome';
import Todo from "./pages/Todo";
import MyProfile from "./pages/MyProfile";
import ThemeContext from './context/ThemeContext';
import NoMatch from './pages/NoMatch';
import TodoDetail from './pages/TodoDetail'
function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Header />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Todo />} />
            </Route>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/:todoId" element={<TodoDetail />} />

            {/* Thêm route "No match" */}
            <Route path="*" element={<h1>Page not found</h1>} /></Routes>
          <Footer />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;