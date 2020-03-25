import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.sass";
import Nav from "./Nav";
import Home from "./Home";
import Curiosities from "./Curiosities";
import Inspirations from "./Inspirations";
import LifeDrawings from "./LifeDrawings";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Curiosities" component={Curiosities} />
        <Route exact path="/Inspirations" component={Inspirations} />
        <Route exact path="/LifeDrawings" component={LifeDrawings} />
      </Switch>
    </Router>
  );
}

export default App;
