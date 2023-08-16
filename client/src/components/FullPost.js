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
  const [newComment, setNewComment] = useState({ text: "", postId: id });

  const fetchPostData = async () => {
    const postResponse = await fetch(`http://localhost:3000/posts/post/${id}`);
    const post = await postResponse.json();
    setPostData(post.post);
    setPostComments(post.comments);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleChange = (e) => {
    setNewComment((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:3000/posts/post/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (response.status !== 200) {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="full-post">
      <h1>{postData.title}</h1>
      <div className="full-post-byline">
        <div><b>{postData.authorName}</b> <span className="full-post-author-span">Contributor</span> </div>
        <div className="full-post-author-span">
          {new Date(postData.timestamp).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
      <p className="full-post-text">{postData.text}</p>
      <h3>Comments</h3>
      {postComments.length !== 0 ? (
        postComments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))
      ) : (
        <div>No Comments</div>
      )}
      <form onSubmit={handleSubmit} className="full-post-form">
        <div className="form-group">
          <label htmlFor="text">
            <b>Add Comment</b>
          </label>
          <textarea
            onChange={handleChange}
            value={newComment.text}
            type="text"
            className="form-control text"
            name="text"
            id="text"
          ></textarea>
          <input type="hidden" name="postId" value={id} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
