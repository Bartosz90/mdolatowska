import React, { useEffect, useContext } from "react";
import BackToCuriositiesBtn from "./BackToCuriositiesBtn";
import ZoomedImg from "../ZoomedImg";
import { StateContext } from "../App";
import "../../styles/Curiosities.sass";
import w1 from "../../img/workshops/w1.jpg";
import w2 from "../../img/workshops/w2.jpg";
import w3 from "../../img/workshops/w3.jpg";
import w4 from "../../img/workshops/w4.jpg";
import w5 from "../../img/workshops/w5.jpg";
import w6 from "../../img/workshops/w6.jpg";
import w7 from "../../img/workshops/w7.jpg";
import w8 from "../../img/workshops/w8.jpg";
import w9 from "../../img/workshops/w9.jpg";
import w10 from "../../img/workshops/w10.jpg";
import w11 from "../../img/workshops/w11.jpg";
import w12 from "../../img/workshops/w12.jpg";
import w13 from "../../img/workshops/w13.jpg";
import w14 from "../../img/workshops/w14.jpg";
import w15 from "../../img/workshops/w15.jpg";
import w16 from "../../img/workshops/w16.jpg";
import w17 from "../../img/workshops/w17.jpg";
import w18 from "../../img/workshops/w18.jpg";
import Preloader from "../Preloader";

const Workshops = () => {
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
        "Drawing into print with Meg Buick; monoprint inspired by 'Utopia' by Szymborska",
    },
    {
      id: 1,
      src: w2,
      description: "Drawing into print with Meg Buick; ghost print",
    },
    {
      id: 2,
      src: w3,
      description: "Drawing into print with Meg Buick; ghost print + pastels",
    },
    {
      id: 3,
      src: w4,
      description: "Drawing into print with Meg Buick; monoprint",
    },
    {
      id: 4,
      src: w5,
      description: "Drawing into print with Meg Buick; monoprint + pastels",
    },
    {
      id: 5,
      src: w6,
      description: "Drawing into print with Meg Buick; monoprint + pastels",
    },
    {
      id: 6,
      src: w7,
      description: "Workshop with Katherine Jones - unsuccessful collagraph",
    },
    {
      id: 7,
      src: w8,
      description: "Workshop with Katherine Jones",
    },
    {
      id: 8,
      src: w9,
      description: "Workshop with Mark Calazet - sense of space",
    },
    {
      id: 9,
      src: w10,
      description: "Workshop with Mark Calazet - colours of Bristol",
    },
    {
      id: 10,
      src: w11,
      description:
        "Workshop with Mark Calazet - identifying seemengly white colours",
    },
    {
      id: 11,
      src: w12,
      description:
        "Workshop with Mark Calazet - combination of my favourite colours",
    },
    {
      id: 12,
      src: w13,
      description: "Screen printing workshop",
    },
    {
      id: 13,
      src: w14,
      description: "Lithography workshop",
    },
    {
      id: 14,
      src: w15,
      description: "Lithography workshop - white paper",
    },
    {
      id: 15,
      src: w16,
      description: "Etching workshop",
    },
    {
      id: 16,
      src: w17,
      description: "Etching workshop - less ink",
    },
    {
      id: 17,
      src: w18,
      description: "Laser cutting workshop",
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
      <section className="mainSection workshopsSection">
        <h3>
          curiosities <i className="fas fa-arrow-right"></i> workshops
        </h3>
        <div className="workshopsImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default Workshops;
