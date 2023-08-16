import { useState, useEffect } from "react";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch("http://localhost:3000/admin/login", {
            method:'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData),
        })
        const data = await response.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", data.user)
      } catch(err){
          console.error(err)
      }
      setUserData({
        email: "",
        password: "",
      })    
  }

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form action="" method="post" className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
