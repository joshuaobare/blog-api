import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar.js";
import Post from "./components/Post.js";
import FullPost from "./components/FullPost";
import Home from "./components/Home";
import uniqid from "uniqid";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/blog">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts/post/:id" element={<FullPost />} />
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
