import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
