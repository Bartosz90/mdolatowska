import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../styles/Curiosities.sass";
import Workshops from "./curiosities/Workshops";
import Exploration from "./curiosities/Exploration";
import ComicsDummy from "./curiosities/ComicsDummy";
import ComicsIllustration from "./curiosities/ComicsIllustration";

const Curiosities = () => {
  const curiositiesNav = [
    { id: 1, name: "workshops", path: "/mdolatowska/Curiosities/workshops" },
    {
      id: 2,
      name: "exploration",
      path: "/mdolatowska/Curiosities/exploration"
    },
    {
      id: 3,
      name: "comics-dummy",
      path: "/mdolatowska/Curiosities/comics-dummy"
    },
    {
      id: 4,
      name: "comics-illustration",
      path: "/mdolatowska/Curiosities/comics-illustration"
    }
  ];
  const curiositiesNavLinks = curiositiesNav.map(link => (
    <NavLink key={link.id} exact to={link.path} className="curiositiesNavBtn">
      {link.name}
    </NavLink>
  ));
  return (
    <section className="mainSection curiositiesSection">
      <h1>CURIOSITIES</h1>
      <nav className="navCuriosities">{curiositiesNavLinks}</nav>
      <Switch>
        <Route
          exact
          path="/mdolatowska/Curiosities/workshops"
          component={Workshops}
        />
        <Route
          exact
          path="/mdolatowska/Curiosities/exploration"
          component={Exploration}
        />
        <Route
          exact
          path="/mdolatowska/Curiosities/comics-dummy"
          component={ComicsDummy}
        />
        <Route
          exact
          path="/mdolatowska/Curiosities/comics-illustration"
          component={ComicsIllustration}
        />
      </Switch>
    </section>
  );
};

export default Curiosities;
