import React, { useState } from "react";
import BackToCuriositiesBtn from "./BackToCuriositiesBtn";
import ZoomedImg from "../ZoomedImg";
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
  const zoomTheImage = e => {
    setZoomed(!zoomed);
    setZoomedImgIndex(e.target.dataset.id);
  };
  const changeImg = e => {
    let currentEvent = e;
    setChagingImg(true);
    setTimeout(() => {
      setChagingImg(false);
    }, 400);
    setTimeout(() => {
      if (currentEvent === "next") {
        if (Number(zoomedImgIndex) === images.length - 1) {
          setZoomedImgIndex(0);
        } else setZoomedImgIndex(Number(zoomedImgIndex) + 1);
      } else {
        if (Number(zoomedImgIndex) === 0) {
          setZoomedImgIndex(images.length - 1);
        } else setZoomedImgIndex(Number(zoomedImgIndex) - 1);
      }
    }, 200);
  };
  const closeImg = () => {
    setClosingImg(true);
    setTimeout(() => {
      setZoomed(false);
      setClosingImg(false);
    }, 400);
  };
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
  const [zoomed, setZoomed] = useState(false);
  const [zoomedImgIndex, setZoomedImgIndex] = useState(0);
  const [changingImg, setChagingImg] = useState(false);
  const [closingImg, setClosingImg] = useState(false);

  const img = images.map((img, i) => (
    <div className="img" data-id={i} key={i}>
      <img key={i} src={img.src} alt="" onClick={zoomTheImage} data-id={i} />
    </div>
  ));

  return (
    <>
      {zoomed && (
        <ZoomedImg
          src={images[zoomedImgIndex].src}
          changeImg={changeImg}
          closeImg={closeImg}
          changingImg={changingImg}
          closingImg={closingImg}
        />
      )}
      <section className="mainSection workshopsSection">{img}</section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default Workshops;
