import './App.css';
import Login from './components/Login'
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
