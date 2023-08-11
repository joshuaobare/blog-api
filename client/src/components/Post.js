import Card from "react-bootstrap/Card";

export default function Post(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.post.authorId}
          </Card.Subtitle>
          <Card.Text>{props.post.text}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">{props.post.timestamp}</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
