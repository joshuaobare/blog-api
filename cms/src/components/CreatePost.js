import { useState } from "react";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    published: false,
    authorName: "",
  });

  const handleChange = (e) => {
    const { name, value , type } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type==='radio'? eval(value) : value,
    }));
    
  };
  console.log(formData)

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={formData.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea
            className="form-control"
            type="text"
            name="text"
            id="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>published</legend>
            <label htmlFor="published">Yes</label>
            <input 
              type="radio" 
              onChange={handleChange} 
              value={true} 
              name="published" 
              id="published" 
            />
            <label htmlFor="unpublished">No</label>
            <input
              type="radio"
              value={false}
              name="published"
              id="unpublished"
              onChange={handleChange}
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
