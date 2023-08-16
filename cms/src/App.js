import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);  

  console.log(loggedIn)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token !== null && userData !== null) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">      
      <BrowserRouter basename="/admin">
      <NavBar />
        {/*loggedIn ? (<Home />) : (<Login />)*/}
        <Routes>
          <Route path="/" exact element={loggedIn ? (<Home />) : (<Login />)} />
          <Route path="/login" exact element={<Login loggedIn={loggedIn}/>} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/post" exact element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
