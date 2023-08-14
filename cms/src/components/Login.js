export default function Login() {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" name="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <div className="form-group">
            <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
