import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Post from "./Post.js";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const postsResponse = await fetch("http://localhost:3000/posts");
    const posts = await postsResponse.json();
    setPosts(posts);
  };
  return (
    <div>
      <h1>All Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => <Post key={uniqid()} post={post} />)}
      </div>
    </div>
  );
}
