import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FullPost(props) {
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState({});
  const [postId, setPostId] = useState("");
  const { id } = useParams();

  const fetchPostData = async () => {
    const postResponse = await fetch(`http://localhost:3000/posts/post/${id}`);
    const post = await postResponse.json();
    setPostData(post.post)
    setPostComments(post.comments)
    
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.text}</p>
      <h3>Comments</h3>
    </div>
  );
}
