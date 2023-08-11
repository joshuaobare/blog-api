import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar.js"
import Post from "./components/Post.js"
import uniqid from 'uniqid'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetchPosts()
  }, [])

  const fetchPosts = async() => {
    const postsResponse = await fetch("http://localhost:3000/posts")    
    const posts = await postsResponse.json()
    setPosts(posts)

  }


  return (
    <div className="App">
      <NavBar />
      {
        posts.map(post => <Post key={uniqid()} post= {post} />)
      }
    </div>
  );
}

export default App;
