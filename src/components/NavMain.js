import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.sass";

const NavMain = () => {
  const links = [
    { id: 1, name: "home", path: "/mdolatowska" },
    { id: 2, name: "curiosities", path: "/mdolatowska/curiosities" },
    { id: 3, name: "inspirations", path: "/mdolatowska/inspirations" },
    { id: 4, name: "life drawings", path: "/mdolatowska/life-drawings" },
  ];
  const navLinks = links.map((link) => (
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
  return <nav className="navMain">{navLinks}</nav>;
};

export default NavMain;
