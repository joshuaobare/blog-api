import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const posts = useState({});

  useEffect(()=> {
    fetchPosts()
  }, [])

  const fetchPosts = async() => {
    const unparsedPosts = await fetch("http://localhost:3000/posts")
    console.log(unparsedPosts)
    const posts = await unparsedPosts.json()

    console.log(posts)

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
