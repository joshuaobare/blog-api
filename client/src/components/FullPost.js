import { useState } from "react"


export default function FullPost(props) {

    const [postData, setPostData] = useState({})
   

    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.text}</p>
            <h3>Comments</h3>

        </div>
    )
}