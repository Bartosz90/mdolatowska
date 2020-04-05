import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Curiosities.sass";

const Curiosities = () => {
  const curiositiesNav = [
    {
      id: 1,
      name: "workshops",
      path: "/mdolatowska/curiosities/workshops",
      description: "something about workshops",
    },
    {
      id: 2,
      name: "exploration",
      path: "/mdolatowska/curiosities/exploration",
      description: "something about exploration",
    },
    {
      id: 3,
      name: "comics-dummy",
      path: "/mdolatowska/curiosities/comics-dummy",
      description: "something about comics-dummy",
    },
    {
      id: 4,
      name: "comics-illustration",
      path: "/mdolatowska/curiosities/comics-illustration",
      description: "something about comics-illustration",
    },
  ];
  const curiositiesNavLinks = curiositiesNav.map((link) => (
    <NavLink key={link.id} exact to={link.path} className="curiositiesNavBtn">
      {link.name}
      <p className="description">{link.description}</p>
    </NavLink>
  ));
  return (
    <section className="mainSection curiositiesSection">
      <h1>CURIOSITIES</h1>
      <nav className="navCuriosities">{curiositiesNavLinks}</nav>
    </section>
  );
};

export default Curiosities;
