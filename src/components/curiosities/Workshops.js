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
import w19 from "../../img/workshops/w19.jpg";
import w20 from "../../img/workshops/w20.jpg";
import Preloader from "../Preloader";

const Workshops = () => {
  const [state, setState, zoomTheImage, handleImagesLoading] = useContext(
    StateContext
  );

  useEffect(() => {
    setState(state => ({
      ...state,
      zoomedImgIndex: 0,
      zoomed: false
    }));

    return () => {
      setState(state => ({
        ...state,
        imagesLoaded: false,
        imagesCounter: 0,
        zoomedImgIndex: 0
      }));
    };
  }, [setState]);

  const images = [
    {
      id: 0,
      src: w1,
      description:
        "Example description of artwork number 1. Elelele, elele, lololo, hehe."
    },
    {
      id: 1,
      src: w2,
      description:
        "Example description of artwork number 2. Elelele, elele, lololo, hehe."
    },
    {
      id: 2,
      src: w3,
      description:
        "Example description of artwork number 3. Elelele, elele, lololo, hehe."
    },
    {
      id: 3,
      src: w4,
      description:
        "Example description of artwork number 4. Elelele, elele, lololo, hehe."
    },
    {
      id: 4,
      src: w5,
      description:
        "Example description of artwork number 5. Elelele, elele, lololo, hehe."
    },
    {
      id: 5,
      src: w6,
      description:
        "Example description of artwork number 6. Elelele, elele, lololo, hehe."
    },
    {
      id: 6,
      src: w7,
      description:
        "Example description of artwork number 7. Elelele, elele, lololo, hehe."
    },
    {
      id: 7,
      src: w8,
      description:
        "Example description of artwork number 8. Elelele, elele, lololo, hehe."
    },
    {
      id: 8,
      src: w9,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 9,
      src: w10,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 10,
      src: w11,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 11,
      src: w12,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 12,
      src: w13,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 13,
      src: w14,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 14,
      src: w15,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 15,
      src: w16,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 16,
      src: w17,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 17,
      src: w18,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 18,
      src: w19,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    },
    {
      id: 19,
      src: w20,
      description:
        "Example description of artwork number 9. Elelele, elele, lololo, hehe."
    }
  ];

  const img = images.map((img, i) => (
    <div className="img" data-id={i} key={i}>
      <img
        key={i}
        onLoad={() => {
          handleImagesLoading(images);
        }}
        src={img.src}
        alt=""
        onClick={zoomTheImage}
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
        <h3>workshops</h3>
        {img}
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default Workshops;
