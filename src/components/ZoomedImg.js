import React, { useContext } from "react";
import { StateContext } from "./App";
import "../styles/ZoomedImg.sass";

const ZoomedImg = (props) => {
  const [state, setState] = useContext(StateContext);

  const changeImg = (e) => {
    e.persist();
    setState((state) => ({ ...state, changingImg: true }));
    setTimeout(() => {
      setState((state) => ({ ...state, changingImg: false }));
    }, 300);
    setTimeout(() => {
      if (e.target.dataset.action === "next") {
        if (Number(state.zoomedImgIndex) === props.imagesArray.length - 1) {
          setState((state) => ({ ...state, zoomedImgIndex: 0 }));
        } else
          setState((state) => ({
            ...state,
            zoomedImgIndex: state.zoomedImgIndex + 1,
          }));
      } else {
        if (Number(state.zoomedImgIndex) === 0) {
          setState((state) => ({
            ...state,
            zoomedImgIndex: props.imagesArray.length - 1,
          }));
        } else
          setState((state) => ({
            ...state,
            zoomedImgIndex: state.zoomedImgIndex - 1,
          }));
      }
    }, 150);
  };
  const closeImg = () => {
    setState((state) => ({
      ...state,
      closingImg: true,
      descriptionActive: false,
    }));
    setTimeout(() => {
      setState((state) => ({ ...state, zoomed: false }));
      setState((state) => ({ ...state, closingImg: false }));
    }, 400);
  };

  const toggleInfo = () => {
    setState((state) => ({
      ...state,
      descriptionActive: !state.descriptionActive,
    }));
  };
  return (
    <section
      className={
        state.closingImg
          ? "zoomedImgContainer closingImg"
          : "zoomedImgContainer"
      }
    >
      <div className="imgContainer">
        <img
          src={props.src}
          alt=""
          className={state.changingImg ? "zoomedImg changingImg" : "zoomedImg"}
          onClick={() => {
            const win = window.open(props.src, "_blank");
            win.focus();
          }}
        />
        <p
          className={
            state.descriptionActive
              ? "fullDescription active"
              : "fullDescription"
          }
        >
          {props.description}
        </p>
        <button className="info" onClick={toggleInfo}>
          <i
            className={
              state.descriptionActive
                ? "fas fa-times-circle"
                : "fas fa-info-circle"
            }
          ></i>
        </button>
      </div>
      <p className="description">{props.description}</p>
      <button
        className="changeImg nextImg"
        onClick={changeImg}
        data-action="next"
      >
        <i className="fas fa-arrow-right" data-action="next"></i>
      </button>
      <button
        className="changeImg prevImg"
        onClick={changeImg}
        data-action="prev"
      >
        <i className="fas fa-arrow-left" data-action="prev"></i>
      </button>
      <button className="closeZoom" onClick={closeImg}>
        <i className="fas fa-times"></i>
      </button>
    </section>
  );
};

export default ZoomedImg;
