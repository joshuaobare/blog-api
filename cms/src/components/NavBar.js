import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      {/*<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>EchoesCMS</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link to="/post">
            <Nav.Link >Create</Nav.Link>
            </Link>
            
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          EchoesCMS
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/post">
              Create Post
            </Link>
            {props.loggedIn ? (
              <Link className="nav-item nav-link" to="/logout">
                Logout
              </Link>
            ) : null}
          </div>
        </div>
        <Link className="nav-item nav-link" to="/logout">
          Logout
        </Link>
      </nav>
    </>
  );
}
