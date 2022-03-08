import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Navbar
      collapseonselect="true"
      expand="md"
      bg="dark"
      variant="dark"
      className="w-100 mb-2 p-0"
    >
      <Navbar.Brand className="col-3 text-center">Magic Tables</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-lg-flex fs-6 col-md-8 justify-content-between fs-5">
          <NavLink
            className="fs-6 fw-bold text-white text-decoration-none"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="fs-6 fw-bold text-white text-decoration-none"
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            className="fs-6 fw-bold text-white text-decoration-none"
            to="/planets"
          >
            Planets
          </NavLink>
          <NavLink
            className="fs-6 fw-bold text-white text-decoration-none"
            to="/starships"
          >
            StarShips
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
