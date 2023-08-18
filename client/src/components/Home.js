import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Post from "./Post.js";
import Hero from "./Hero.js";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const postsResponse = await fetch("https://lively-moon-2540.fly.dev/api/posts");
    const posts = await postsResponse.json();
    setPosts(posts);
  };
  return (
    <div>
      <Hero />
      <div className="home-posts-section">
        <h1 className="home-posts-section-title">All Posts</h1>
        <div className="posts-grid">
          {posts.map((post) => {
            if (post.published === true) {
              return <Post key={uniqid()} post={post} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
