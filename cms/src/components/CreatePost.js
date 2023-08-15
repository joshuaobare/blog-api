import { useState } from "react";

export default function CreatePost() {
  const [formData, setFormData] = useState({
      title:"",
      text:"",
      published:false,
      authorName:""

  });

  const handleChange = (e) => {
      
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" name="title" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea
            className="form-control"
            type="text"
            name="text"
            id="text"
          />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>published</legend>
            <label htmlFor="published">Yes</label>
            <input type="radio" value={true} name="published" id="published" />
            <label htmlFor="unpublished">No</label>
            <input
              type="radio"
              value={false}
              name="published"
              id="unpublished"
            />
          </fieldset>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
