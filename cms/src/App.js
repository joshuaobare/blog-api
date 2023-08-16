import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

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
        <Routes>
          {!loggedIn ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}

          <Route path="/signup" element={<SignUp />} />
          <Route path="/post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
