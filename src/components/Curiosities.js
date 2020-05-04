import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Curiosities.sass";

const Curiosities = () => {
  const curiositiesNav = [
    {
      id: 1,
      name: "workshops",
      path: "/curiosities/workshops",
      description:
        "something about workshops something about workshops something about workshops something about workshops",
    },
    {
      id: 2,
      name: "exploration phase",
      path: "/curiosities/exploration",
      description:
        "something about exploration something about exploration something about exploration something about exploration",
    },
    {
      id: 3,
      name: "comics - storyboard",
      path: "/curiosities/comics-storyboard",
      description:
        "something about comics-dummy something about comics-dummy something about comics-dummy something about comics-dummy",
    },
    {
      id: 4,
      name: "comics - illustrations",
      path: "/curiosities/comics-illustration",
      description: "process + finished illustrations",
    },
  ];
  const curiositiesNavLinks = curiositiesNav.map((link) => (
    <NavLink key={link.id} exact to={link.path} className="curiositiesNavBtn">
      <h1>{link.name}</h1>
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
