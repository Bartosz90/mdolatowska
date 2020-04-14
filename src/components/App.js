import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

export const StateContext = createContext();

const App = () => {
  const [state, setState] = useState({
    zoomed: false,
    zoomedImgIndex: 0,
    descriptionActive: false,
    changingImg: false,
    closingImg: false,
    imagesCounter: 0,
    imagesLoaded: false,
  });

  const zoomTheImage = (e) => {
    e.persist();
    setState((state) => ({ ...state, zoomed: !state.zoomed }));
    setState((state) => ({
      ...state,
      zoomedImgIndex: Number(e.target.dataset.id),
    }));
  };

  const handleImagesLoading = (imagesArray) => {
    setState((state) => ({ ...state, imagesCounter: state.imagesCounter + 1 }));
    if (state.imagesCounter >= imagesArray.length - 1) {
      setState((state) => ({ ...state, imagesLoaded: true }));
    }
  };

  return (
    <Router>
      <StateContext.Provider
        value={[state, setState, zoomTheImage, handleImagesLoading]}
      >
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
            path="/mdolatowska/curiosities/comics-storyboard"
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
