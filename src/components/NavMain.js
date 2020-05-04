import React, { useContext } from "react";
import { StateContext } from "./App";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.sass";

const NavMain = () => {
  const [state, setState] = useContext(StateContext);
  const links = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "curiosities", path: "/curiosities" },
    { id: 3, name: "inspirations", path: "/inspirations" },
    { id: 4, name: "life drawings", path: "/life-drawings" },
  ];
  const navLinks = links.map((link) => (
    <NavLink
      key={link.id}
      exact
      to={link.path}
      className="navBtn"
      activeClassName="selected"
      onClick={() => {
        setState((state) => ({ ...state, menuActive: !state.menuActive }));
      }}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <>
      <button
        className="hamburger"
        onClick={() => {
          setState((state) => ({ ...state, menuActive: !state.menuActive }));
        }}
      >
        {state.menuActive ? (
          <i class="far fa-times-circle"></i>
        ) : (
          <i class="fas fa-bars"></i>
        )}
      </button>
      <nav className={state.menuActive ? "navMain active" : "navMain"}>
        {navLinks}
      </nav>
    </>
  );
};

export default NavMain;
