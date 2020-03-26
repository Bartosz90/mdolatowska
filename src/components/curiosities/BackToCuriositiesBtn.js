import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../../styles/Curiosities.sass";

const BackToCuriositiesBtn = () => {
  return (
    <NavLink
      exact
      to="/mdolatowska/Curiosities/"
      className="backToCuriositiesBtn"
    >
      <i class="fas fa-arrow-left"></i> back
    </NavLink>
  );
};

export default BackToCuriositiesBtn;
