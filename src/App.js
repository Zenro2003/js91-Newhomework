import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import NameCard from'./components/NameCard';
import Counter from './components/Couter';
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Profile/> */}
        {/* <Counter/>
        <NameCard name="Bob" age={30} gender="male" />
        <NameCard name="Alice" age={25} gender="female" /> */}
        <Student/>
      </header>
    </div>
  );
}

export default App;
