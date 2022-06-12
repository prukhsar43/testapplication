import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

<Routes>
      
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
 
    </Routes>
      
    </div>
  );
}

export default App;
