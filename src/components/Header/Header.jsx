import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ marginLeft: "7%" }} className="mr-auto">
          <img
            src="https://www.svgrepo.com/show/91797/cheese.svg"
            alt="logo"
            height="50px"
          />
          <Nav.Link href="#home" style={{ fontSize: "1.1em" }}>
            Home
          </Nav.Link>
        </Nav>

        <Nav style={{ marginRight: "7%" }}>
          <Nav.Link href="#catalog" style={{ fontSize: "1.1em" }}>
            Catalog
          </Nav.Link>
          <Nav.Link href="#cart" style={{ fontSize: "1.1em" }}>
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
