import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../styles/App.sass";
import NavMain from "./NavMain";
import Home from "./Home";
import Curiosities from "./Curiosities";
import Inspirations from "./Inspirations";
import LifeDrawings from "./LifeDrawings";
import Workshops from "./curiosities/Workshops";
import Exploration from "./curiosities/Exploration";
import ComicsDummy from "./curiosities/ComicsDummy";
import ComicsIllustration from "./curiosities/ComicsIllustration";

function App() {
  return (
    <Router>
      <NavMain />
      <Switch>
        <Redirect exact from="/" to="/mdolatowska" />
        <Route exact path="/mdolatowska" component={Home} />
        <Route exact path="/mdolatowska/curiosities" component={Curiosities} />
        <Route
          exact
          path="/mdolatowska/inspirations"
          component={Inspirations}
        />
        <Route
          exact
          path="/mdolatowska/life-drawings"
          component={LifeDrawings}
        />
        <Route
          exact
          path="/mdolatowska/curiosities/workshops"
          component={Workshops}
        />
        <Route
          exact
          path="/mdolatowska/curiosities/exploration"
          component={Exploration}
        />
        <Route
          exact
          path="/mdolatowska/curiosities/comics-dummy"
          component={ComicsDummy}
        />
        <Route
          exact
          path="/mdolatowska/curiosities/comics-illustration"
          component={ComicsIllustration}
        />
      </Switch>
    </Router>
  );
}

export default App;
