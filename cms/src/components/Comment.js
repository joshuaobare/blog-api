export default function Comment(props) {
  return (
    <div className="Comment">
      <div>
        <div>Anon</div>
        <div>{props.comment.text}</div>
        <div>{props.comment.timestamp}</div>
      </div>
      <div>
          <form action="" method="delete" onSubmit={(e) => props.deleteComment(e, props.id)}>
            <button className="btn btn-danger delete-comment-btn">Delete Comment</button>
          </form>
          
      </div>
    </div>
  );
}
