import React, { useEffect, useContext, useState } from "react";
import ZoomedImg from "./ZoomedImg";
import { StateContext } from "./App";
import "../styles/Inspirations.sass";
import w1 from "../img/inspirations/1.jpg";
import w2 from "../img/inspirations/2.jpg";
import w3 from "../img/inspirations/3.JPG";
import w4 from "../img/inspirations/4.jpg";
import w5 from "../img/inspirations/5.jpg";
import w6 from "../img/inspirations/6.jpeg";
import w7 from "../img/inspirations/7.jpg";
import w8 from "../img/inspirations/8.jpg";
import w9 from "../img/inspirations/9.jpg";
import w10 from "../img/inspirations/10.jpg";
import w11 from "../img/inspirations/11.jpg";
import w12 from "../img/inspirations/12.jpg";
import w13 from "../img/inspirations/13.jpg";
import w14 from "../img/inspirations/14.jpg";
import w15 from "../img/inspirations/15.jpg";
import w16 from "../img/inspirations/16.jpg";
import w17 from "../img/inspirations/17.jpg";
import w18 from "../img/inspirations/18.jpg";
import w19 from "../img/inspirations/19.jpg";
import w20 from "../img/inspirations/20.jpg";
import w21 from "../img/inspirations/21.jpg";
import w22 from "../img/inspirations/22.png";
import w23 from "../img/inspirations/23.jpg";
import w24 from "../img/inspirations/24.jpg";
import w25 from "../img/inspirations/25.png";
import w26 from "../img/inspirations/26.png";
import w27 from "../img/inspirations/27.png";
import w28 from "../img/inspirations/28.png";
import w29 from "../img/inspirations/29.jpg";
import w30 from "../img/inspirations/30.jpg";
import w31 from "../img/inspirations/31.jpg";
import w32 from "../img/inspirations/32.jpg";

import Preloader from "./Preloader";

const Inspirations = () => {
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

  const inspirationImages1 = [
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
  ];
  const inspirationImages2 = [
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
  ];
  const inspirationImages3 = [
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
  ];
  const inspirationImages4 = [
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
  ];
  const inspirationImages5 = [
    {
      id: 16,
      src: w17,
      description: "",
    },
    {
      id: 17,
      src: w18,
      description: "",
    },
    {
      id: 18,
      src: w19,
      description: "",
    },
    {
      id: 19,
      src: w20,
      description: "",
    },
  ];
  const inspirationImages6 = [
    {
      id: 20,
      src: w21,
      description: "",
    },
    {
      id: 21,
      src: w22,
      description: "",
    },
    {
      id: 22,
      src: w23,
      description: "",
    },
    {
      id: 23,
      src: w24,
      description: "",
    },
  ];
  const inspirationImages7 = [
    {
      id: 24,
      src: w25,
      description: "",
    },
    {
      id: 25,
      src: w26,
      description: "",
    },
    {
      id: 26,
      src: w27,
      description: "",
    },
    {
      id: 27,
      src: w28,
      description: "",
    },
  ];
  const inspirationImages8 = [
    {
      id: 28,
      src: w29,
      description: "",
    },
    {
      id: 29,
      src: w30,
      description: "",
    },
    {
      id: 30,
      src: w31,
      description: "",
    },
    {
      id: 31,
      src: w32,
      description: "",
    },
  ];

  const [inspirationsState, setInspirationsState] = useState({
    currentArray: inspirationImages1,
  });

  const inspisationsImg1 = inspirationImages1.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg2 = inspirationImages2.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg3 = inspirationImages3.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg4 = inspirationImages4.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg5 = inspirationImages5.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg6 = inspirationImages6.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg7 = inspirationImages7.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
        }}
        src={img.src}
        alt=""
        data-id={i}
      />
    </div>
  ));
  const inspisationsImg8 = inspirationImages8.map((img, i, array) => (
    <div
      className={`img img${i}`}
      data-id={i}
      key={i}
      onClick={(e) => {
        setInspirationsState((state) => ({
          ...state,
          currentArray: array,
        }));
        zoomTheImage(e);
      }}
    >
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(inspirationImages1);
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
          src={inspirationsState.currentArray[state.zoomedImgIndex].src}
          imagesArray={inspirationsState.currentArray}
          description={
            inspirationsState.currentArray[state.zoomedImgIndex].description
          }
        />
      )}
      <section className="mainSection Inspirations">
        <h1>INSPIRATIONS</h1>
        <section className="inspiration inspiration1">
          <h1>Octavia Tomyn</h1>
          <section className="images">{inspisationsImg1}</section>
        </section>
        <section className="inspiration inspiration2">
          <section className="images">{inspisationsImg2}</section>
          <h1>Debbie Tung</h1>
        </section>
        <section className="inspiration inspiration3">
          <h1>Heath Robinson</h1>
          <section className="images">{inspisationsImg3}</section>
        </section>
        <section className="inspiration inspiration4">
          <section className="images">{inspisationsImg4}</section>
          <h1>Teti Kartasheva</h1>
        </section>
        <section className="inspiration inspiration5">
          <h1>Marina Anaya</h1>
          <section className="images">{inspisationsImg5}</section>
        </section>
        <section className="inspiration inspiration6">
          <section className="images">{inspisationsImg6}</section>
          <h1>Maurice Sendak</h1>
        </section>
        <section className="inspiration inspiration7">
          <h1>Laimutė Varkalaitė</h1>
          <section className="images">{inspisationsImg7}</section>
        </section>
        <section className="inspiration inspiration8">
          <section className="images">{inspisationsImg8}</section>
          <h1>Aleksandra and Daniel Mizielińscy</h1>
        </section>
      </section>
    </>
  );
};

export default Inspirations;
