import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FullPost(props) {
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [postId, setPostId] = useState("");
  const { id } = useParams();

  const fetchPostData = async () => {
    const postResponse = await fetch(`http://localhost:3000/posts/post/${id}`);
    const post = await postResponse.json();
    setPostData(post.post);
    setPostComments(post.comments);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.text}</p>
      <h3>Comments</h3>
      {postComments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <form method="post">
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea type="text" className="form-control text" name="text" id="text"></textarea>
        </div>
        <div className="form-group">
            <button className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  );
}
