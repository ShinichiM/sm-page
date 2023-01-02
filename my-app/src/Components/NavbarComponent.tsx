import "../App.css";
import { Hamburger } from "./Hamburger";
import { MobileMenu } from "./MobileMenu";
import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export const NavbarComponent = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const expand = "lg";

  return (
    <>
      <Navbar
        key={expand}
        style={{ backgroundColor: "#282c34" }}
        expand={expand}
        className="mb-3"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand
            style={{ color: "#eec262" }}
            className="px-4"
            href={`${window.location.origin}`}
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
                <Nav.Link
                  href={`${window.location.origin}/#projects`}
                  style={{ color: "eec262" }}
                >
                  Work
                </Nav.Link>
                <Nav.Link href="#contact" style={{ color: "eec262" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <nav className="navbar px-4 py-4">
        <h2 style={{ fontSize: "8vw" }}>SM</h2>
        <ul>
          <div className="hamburger">
            <Hamburger menu={menu} setMenu={setMenu} />
          </div>
        </ul>
        <MobileMenu menu={menu} />
      </nav> */}
    </>
  );
};
