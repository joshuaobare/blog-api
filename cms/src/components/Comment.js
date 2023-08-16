export default function Comment(props) {
  return (
    <div className="Comment">
      <div>
        <div>Anon</div>
        <div>{props.comment.text}</div>
        <div>{props.comment.timestamp}</div>
      </div>
      <div>
          <button className="btn btn-danger delete-comment-btn">Delete Comment</button>
      </div>
    </div>
  );
}
