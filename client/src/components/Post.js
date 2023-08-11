export default function Post(props){
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            <p>{props.post.timestamp}</p>
            <p>{props.post.authorId}</p>
        </div>

    )
}