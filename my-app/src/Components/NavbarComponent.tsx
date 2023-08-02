import "../App.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export const NavbarComponent = () => {
  const expand = "lg";

  // Add eventlistener, onClick, onSelect, function to list all available projects as a dropdown menu
  // or expandable menu when selecting Projects Nav Link
  return (
    <>
      <Navbar
        key={expand}
        style={{ backgroundColor: "#282c34" }}
        expand={expand}
        className="mb-3 display-mobile"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand
            style={{ color: "#eec262" }}
            className="px-4"
            // href={`${window.location.origin}`}
            href="#home"
          >
            SM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ backgroundColor: "#282c34" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                style={{ color: "#eec262" }}
              >
                SM
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#about" style={{ color: "eec262 !important" }}>
                  About
                </Nav.Link>
                <Nav.Link href="#contact" style={{ color: "eec262" }}>
                  Contact
                </Nav.Link>
                <Nav.Link
                  href={`${window.location.origin}/#projects`}
                  style={{ color: "eec262" }}
                >
                  Projects
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <nav
        className="navbar-container display-desktop-menu"
        style={{ borderRight: "0.1vw solid #eec262" }}
      >
        <div className="navbar-spacing">
          <div>
            <a className="" href="#home" style={{ fontSize: "2.8vw" }}>
              SM
            </a>
          </div>
          <ul className="">
            <li>
              <a className="" href="#about" style={{ fontSize: "1.5vw" }}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="" style={{ fontSize: "1.5vw" }}>
                Projects
              </a>
            </li>
            <li>
              <a className="" href="#contact" style={{ fontSize: "1.5vw" }}>
                Contact
              </a>
            </li>
            <li>
              <div style={{ marginTop: "2.5vh" }}>
                <a href="https://github.com/ShinichiM">
                  <img src="/images/github.svg" alt="github"></img>
                </a>

                <a href="https://www.linkedin.com/in/shinichi-miyakawa/">
                  <img src="images/linkedIn.svg" alt="linkedin"></img>
                </a>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};
