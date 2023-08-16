import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div className="homepage-post-title">
            <Card.Title>{props.post.title}</Card.Title>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            <div>{props.post.authorId}</div>
            <div>{(new Date(props.post.timestamp)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</div>
          </Card.Subtitle>
          <div className="homepage-post-text">
            <Card.Text>{props.post.text}</Card.Text>
          </div>

          <Link to={`/posts/post/${props.post._id}`}>
            <Card.Link href="#">Read Post</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
