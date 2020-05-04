import React, { useEffect, useContext } from "react";
import BackToCuriositiesBtn from "./BackToCuriositiesBtn";
import ZoomedImg from "../ZoomedImg";
import { StateContext } from "../App";
import "../../styles/Curiosities.sass";
import w1 from "../../img/comicsdummy/w1.jpg";
import w2 from "../../img/comicsdummy/w2.jpg";
import w3 from "../../img/comicsdummy/w3.jpg";
import w4 from "../../img/comicsdummy/w4.jpg";
import w5 from "../../img/comicsdummy/w5.jpg";
import w6 from "../../img/comicsdummy/w6.jpg";
import w7 from "../../img/comicsdummy/w7.jpg";
import w8 from "../../img/comicsdummy/w8.jpg";
import w9 from "../../img/comicsdummy/w9.jpg";
import w10 from "../../img/comicsdummy/w10.jpg";
import w11 from "../../img/comicsdummy/w11.jpg";
import w12 from "../../img/comicsdummy/w12.jpg";
import w13 from "../../img/comicsdummy/w13.jpg";
import w14 from "../../img/comicsdummy/w14.jpg";
import w15 from "../../img/comicsdummy/w15.jpg";
import w16 from "../../img/comicsdummy/w16.jpg";
import w17 from "../../img/comicsdummy/w17.jpg";
import w18 from "../../img/comicsdummy/w18.jpg";
import w19 from "../../img/comicsdummy/w19.jpg";

import Preloader from "../Preloader";

const ComicsDummy = () => {
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
      description:
        "1. An a5 notebook filled with ideas, notes and storyboard for my comics",
    },
    {
      id: 1,
      src: w2,
      description: "2. First page from the notebook",
    },
    {
      id: 2,
      src: w3,
      description: "3. Sample 1",
    },
    {
      id: 3,
      src: w4,
      description: "4. Sample 2",
    },
    {
      id: 4,
      src: w5,
      description: "5.",
    },
    {
      id: 5,
      src: w6,
      description: "6.",
    },
    {
      id: 6,
      src: w7,
      description: "7.",
    },
    {
      id: 7,
      src: w8,
      description: "8.",
    },
    {
      id: 8,
      src: w9,
      description: "9.",
    },
    {
      id: 9,
      src: w10,
      description: "10.",
    },
    {
      id: 10,
      src: w11,
      description: "11.",
    },
    {
      id: 11,
      src: w12,
      description: "12.",
    },
    {
      id: 12,
      src: w13,
      description: "13.",
    },
    {
      id: 13,
      src: w14,
      description: "14.",
    },
    {
      id: 14,
      src: w15,
      description: "15.",
    },
    {
      id: 15,
      src: w16,
      description: "16.",
    },
    {
      id: 16,
      src: w17,
      description: "17.",
    },
    {
      id: 17,
      src: w18,
      description: "18.",
    },
    {
      id: 18,
      src: w19,
      description: "19.",
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
      <section className="mainSection comicsDummy">
        <h3>
          curiosities <i className="fas fa-arrow-right"></i> comics - storyboard
        </h3>
        <div className="comicsDummyImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default ComicsDummy;
