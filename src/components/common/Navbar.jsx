import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">
        Crud-APP
      </span>
      <NavLink className="nav-item nav-link active" to="/people">
        People
      </NavLink>
      <NavLink className="nav-item nav-link" to="/planets">
        Planets
      </NavLink>
      <NavLink className="nav-item nav-link" to="/starships">
        Starships
      </NavLink>
    </nav>
  );
}

export default Navbar;