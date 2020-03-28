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

const Workshops = () => {
  const [state, setState, zoomTheImage] = useContext(StateContext);

  useEffect(() => {
    setState(state => ({ ...state, zoomedImgIndex: 0, zoomed: false }));
  }, []);

  const images = [
    { id: 0, src: w1 },
    { id: 1, src: w2 },
    { id: 2, src: w3 },
    { id: 3, src: w4 },
    { id: 4, src: w5 },
    { id: 5, src: w6 },
    { id: 6, src: w7 },
    { id: 7, src: w8 },
    { id: 8, src: w9 }
  ];

  const img = images.map((img, i) => (
    <div className="img" data-id={i} key={i}>
      <img key={i} src={img.src} alt="" onClick={zoomTheImage} data-id={i} />
    </div>
  ));

  return (
    <>
      {state.zoomed && (
        <ZoomedImg
          src={images[state.zoomedImgIndex].src}
          imagesArray={images}
        />
      )}
      <section className="mainSection workshopsSection">{img}</section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default Workshops;
