import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.sass";

const Nav = () => {
  const links = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "curiosities", path: "/Curiosities" },
    { id: 3, name: "inspirations", path: "/Inspirations" },
    { id: 4, name: "life drawings", path: "/LifeDrawings" }
  ];
  const navLinks = links.map(link => (
    <NavLink
      key={link.id}
      exact
      to={link.path}
      className="navBtn"
      activeClassName="selected"
    >
      {link.name}
    </NavLink>
  ));
  return <nav className="nav">{navLinks}</nav>;
};

export default Nav;
