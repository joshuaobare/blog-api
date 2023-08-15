import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import CreatePost from './components/CreatePost'
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/post' element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
