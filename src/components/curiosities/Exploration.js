import React, { useContext, useEffect } from "react";
import BackToCuriositiesBtn from "./BackToCuriositiesBtn";
import ZoomedImg from "../ZoomedImg";
import { StateContext } from "../App";
import w1 from "../../img/exploration/w1.jpg";
import w2 from "../../img/exploration/w2.jpg";
import w3 from "../../img/exploration/w3.jpg";
import w4 from "../../img/exploration/w4.jpg";
import w5 from "../../img/exploration/w5.jpg";
import w6 from "../../img/exploration/w6.jpg";
import w7 from "../../img/exploration/w7.jpg";
import w8 from "../../img/exploration/w8.jpg";
import w9 from "../../img/exploration/w9.jpg";
import w10 from "../../img/exploration/w10.jpg";
import w11 from "../../img/exploration/w11.jpg";
import w12 from "../../img/exploration/w12.jpg";
import w13 from "../../img/exploration/w13.jpg";
import w14 from "../../img/exploration/w14.jpg";

import Preloader from "../Preloader";

const Exploration = () => {
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
      description: "Mind map",
    },
    {
      id: 1,
      src: w2,
      description: "Introduction to 'curiosities'",
    },
    {
      id: 2,
      src: w3,
      description: "Introducing emotional intelligence",
    },
    {
      id: 3,
      src: w4,
      description: "Anger - collage - newspapers + acrylics",
    },
    {
      id: 4,
      src: w5,
      description: "Sadnes - collage - newspapers + acrylics + marker",
    },
    {
      id: 5,
      src: w6,
      description: "'Utopia' illustration - first attempt; watercolours",
    },
    {
      id: 6,
      src: w7,
      description: "Second attempt - fineliner",
    },
    {
      id: 7,
      src: w8,
      description:
        "Poem divided into a series of small illustrations - pen; part 1",
    },
    {
      id: 8,
      src: w9,
      description: "Part 2",
    },
    {
      id: 9,
      src: w10,
      description: "'Island where all becomes clear'; trying out pastels",
    },
    {
      id: 10,
      src: w11,
      description: "Not finished drawing of 'Utopia'",
    },
    {
      id: 11,
      src: w12,
      description: "Comic book - moodboard",
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
      <section className="mainSection explorationSection">
        <h3>
          curiosities <i className="fas fa-arrow-right"></i> exploration phase
        </h3>
        <div className="ExplorationImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default Exploration;
