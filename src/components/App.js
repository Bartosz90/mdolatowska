import React, { createContext, useState } from "react";
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
import Preloader from "./Preloader";

export const StateContext = createContext();

const App = () => {
  const [state, setState] = useState({
    zoomed: false,
    zoomedImgIndex: 0,
    changingImg: false,
    closingImg: false,
    imagesLoaded: true
  });

  const zoomTheImage = e => {
    e.persist();
    console.log("working");
    setState(state => ({ ...state, zoomed: !state.zoomed }));
    setState(state => ({
      ...state,
      zoomedImgIndex: Number(e.target.dataset.id)
    }));
  };

  const handleImagesLoading = () => {
    setState(state => ({ ...state, imagesLoaded: true }));
  };

  return (
    <Router>
      <StateContext.Provider
        value={[state, setState, zoomTheImage, handleImagesLoading]}
      >
        {!state.imagesLoaded && <Preloader />}
        <NavMain />
        <Switch>
          <Redirect exact from="/" to="/mdolatowska" />
          <Route exact path="/mdolatowska" component={Home} />
          <Route
            exact
            path="/mdolatowska/curiosities"
            component={Curiosities}
          />
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
      </StateContext.Provider>
    </Router>
  );
};

export default App;
