import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import FullPost from "./components/FullPost";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token !== null && userData !== null) {
      setLoggedIn(true);
    }
  }, []);

  const loginHandleSubmit = async (e, userData) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        setLoggedIn(true)
      }else {
        console.log(data)
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{

  },[loggedIn])

  return (
    <div className="App">
      <BrowserRouter basename="/admin">
        <NavBar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              loggedIn ? (
                <Home />
              ) : (
                <Login loginHandleSubmit={loginHandleSubmit} />
              )
            }
          />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/post" exact element={<CreatePost />} />
          <Route path="/posts/post/:id" element={<FullPost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
