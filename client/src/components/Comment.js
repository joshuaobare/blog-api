export default function Comment(props) {
  return (
    <div className="Comment">
      <div className="commenter">Anon</div>
      <div className="comment-text">{props.comment.text}</div>
      <div className="comment-date">
        {new Date(props.comment.timestamp).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
