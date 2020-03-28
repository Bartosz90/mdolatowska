import React from "react";
import "../styles/Preloader.sass";

const Preloader = () => {
  return (
    <section className="preloader">
      <div className="square">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
        <span className="circle circle4"></span>
      </div>
    </section>
  );
};

export default Preloader;
