import React, { useEffect, useContext } from "react";
import ZoomedImg from "./ZoomedImg";
import { StateContext } from "./App";
import "../styles/LifeDrawings.sass";
import w1 from "../img/lifedrawing/w1.jpg";
import w2 from "../img/lifedrawing/w2.jpg";
import w3 from "../img/lifedrawing/w3.jpg";
import w4 from "../img/lifedrawing/w4.jpg";
import w5 from "../img/lifedrawing/w5.jpg";
import w6 from "../img/lifedrawing/w6.jpg";
import w7 from "../img/lifedrawing/w7.jpg";
import w8 from "../img/lifedrawing/w8.jpg";
import w9 from "../img/lifedrawing/w9.jpg";
import w10 from "../img/lifedrawing/w10.jpg";
import w11 from "../img/lifedrawing/w11.jpg";
import w12 from "../img/lifedrawing/w12.jpg";
import w13 from "../img/lifedrawing/w13.jpg";
import w14 from "../img/lifedrawing/w14.jpg";
import w15 from "../img/lifedrawing/w15.jpg";
import w16 from "../img/lifedrawing/w16.jpg";
import w17 from "../img/lifedrawing/w17.jpg";
import Preloader from "./Preloader";

const LifeDrawings = () => {
  const [state, setState, zoomTheImage, handleImagesLoading] = useContext(
    StateContext
  );

  useEffect(() => {
    setState((state) => ({
      ...state,
      zoomedImgIndex: 0,
      zoomed: false,
    }));

    return () => {
      setState((state) => ({
        ...state,
        imagesLoaded: false,
        imagesCounter: 0,
        zoomedImgIndex: 0,
      }));
    };
  }, [setState]);

  const images = [
    {
      id: 0,
      src: w1,
      description: "",
    },
    {
      id: 1,
      src: w2,
      description: "",
    },
    {
      id: 2,
      src: w3,
      description: "",
    },
    {
      id: 3,
      src: w4,
      description: "",
    },
    {
      id: 4,
      src: w5,
      description: "",
    },
    {
      id: 5,
      src: w6,
      description: "",
    },
    {
      id: 6,
      src: w7,
      description: "",
    },
    {
      id: 7,
      src: w8,
      description: "",
    },
    {
      id: 8,
      src: w9,
      description: "",
    },
    {
      id: 9,
      src: w10,
      description: "",
    },
    {
      id: 10,
      src: w11,
      description: "",
    },
    {
      id: 11,
      src: w12,
      description: "",
    },
    {
      id: 12,
      src: w13,
      description: "",
    },
    {
      id: 13,
      src: w14,
      description: "",
    },
    {
      id: 14,
      src: w15,
      description: "",
    },
    {
      id: 15,
      src: w16,
      description: "",
    },
    {
      id: 16,
      src: w17,
      description: "",
    },
  ];

  const img = images.map((img, i) => (
    <div className={`img img${i}`} data-id={i} key={i} onClick={zoomTheImage}>
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(images);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));

  return (
    <>
      {!state.imagesLoaded && <Preloader />}
      {state.zoomed && (
        <ZoomedImg
          src={images[state.zoomedImgIndex].src}
          imagesArray={images}
          description={images[state.zoomedImgIndex].description}
        />
      )}
      <section className="mainSection lifeDrawingsSection">
        <h3>life drawings</h3>
        <div className="workshopsImgContainer">{img}</div>
      </section>
    </>
  );
};

export default LifeDrawings;
