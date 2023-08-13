export default function Comment(props) {
    return (
        <div>
            <div>Anon</div>
            <div>{props.comment.text}</div>
            <div>{props.comment.timestamp}</div>
        </div>

    )
}