import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/assets/new.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          News App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
