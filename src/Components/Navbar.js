import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
function NavbarA() {
  return (
    <Navbar style={{ backgroundColor: "#0D0E10" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            height="34px"
            width="34px"
            src="https://play-lh.googleusercontent.com/xn0i77gUK5YfpBZlyuozEL8rThZc6FkX0ozZjVyogstEg7xUtrUdIDPuiwZWsQ9MjA"
          ></img>
          <span
            style={{
              color: "white",
              lineHeight: "1.2",
              fontSize: "1.2rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            JioCinema
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="text-white"
              style={{
                color: "white",
                lineHeight: "1.2",
                fontSize: "0.8rem",
                fontWeight: "700",
                paddingLeft: "9px",
              }}
            >
              {" "}
              HOME{" "}
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="text-white"
              style={{
                color: "white",
                lineHeight: "1.2",
                fontSize: ".8rem",
                fontWeight: "700",
                paddingLeft: "9px",
              }}
            >
              TaTa IPL
            </Nav.Link>
            <Nav.Link
              href="#action1"
              className="text-white"
              style={{
                color: "white",
                lineHeight: "1.2",
                fontSize: ".8rem",
                fontWeight: "700",
                paddingLeft: "9px",
              }}
            >
              Movies
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="text-white"
              style={{
                color: "white",
                lineHeight: "1.2",
                fontSize: ".8rem",
                fontWeight: "700",
                paddingLeft: "9px",
              }}
            >
              TV Shows
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{ background: "transparent", borderRadius: "20px" ,color:"white"}}
            />
            <CgProfile style={{ color: "white" ,height:"30px", width:"30px",paddingTop:"5px"}} />
           {" "}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarA;
