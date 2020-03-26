import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Curiosities.sass";

const BackToCuriositiesBtn = () => {
  return (
    <NavLink
      exact
      to="/mdolatowska/curiosities/"
      className="backToCuriositiesBtn"
    >
      <i className="fas fa-arrow-left"></i> back
    </NavLink>
  );
};

export default BackToCuriositiesBtn;
