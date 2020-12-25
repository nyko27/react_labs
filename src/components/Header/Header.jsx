import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink } from "react-router-dom";
import "./Header.css";

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
          <NavLink to="/" className='nav_link' style={{marginTop: "10px"}} activeClassName="nav_link_active" exact={true}>
            Home
          </NavLink>
        </Nav>

        <Nav style={{ marginRight: "7%" }}>
          <NavLink to="catalog"  className='nav_link' activeClassName="nav_link_active">
            Catalog
          </NavLink>
          <NavLink to="cart"  className='nav_link' activeClassName="nav_link_active">
            Cart
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
