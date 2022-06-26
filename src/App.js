import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
import Resume from './components/Resume'
import Votesubmit from './components/Votesubmit';

function App() {
  return (
    <div className="App">

<Routes>
      
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/vote" element={<Votesubmit />}/>
 
    </Routes>
      
    </div>
  );
}

export default App;
