import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
        <Redirect exact from="/" to="/mdolatowska" />
        <Route exact path="/mdolatowska" component={Home} />
        <Route exact path="/mdolatowska/Curiosities" component={Curiosities} />
        <Route
          exact
          path="/mdolatowska/Inspirations"
          component={Inspirations}
        />
        <Route
          exact
          path="/mdolatowska/LifeDrawings"
          component={LifeDrawings}
        />
      </Switch>
    </Router>
  );
}

export default App;
