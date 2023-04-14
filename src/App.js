import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
