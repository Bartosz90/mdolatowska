import React from "react";
import "../styles/ZoomedImg.sass";

const ZoomedImg = props => {
  return (
    <section
      className={
        props.closingImg
          ? "zoomedImgContainer closingImg"
          : "zoomedImgContainer"
      }
    >
      <img
        src={props.src}
        alt=""
        className={props.changingImg ? "zoomedImg changingImg" : "zoomedImg"}
      />
      <button
        className="changeImg nextImg"
        onClick={props.changeImg}
        data-action="next"
      >
        <i className="fas fa-arrow-right" data-action="next"></i>
      </button>
      <button
        className="changeImg prevImg"
        onClick={props.changeImg}
        data-action="prev"
      >
        <i className="fas fa-arrow-left" data-action="prev"></i>
      </button>
      <button className="closeZoom" onClick={props.closeImg}>
        <i className="fas fa-times"></i>
      </button>
    </section>
  );
};

export default ZoomedImg;
