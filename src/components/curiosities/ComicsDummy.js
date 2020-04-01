import React, { useEffect, useContext } from "react";
import BackToCuriositiesBtn from "./BackToCuriositiesBtn";
import ZoomedImg from "../ZoomedImg";
import { StateContext } from "../App";
import "../../styles/Curiosities.sass";
import w1 from "../../img/comicsillustration/w1.jpg";
import w2 from "../../img/comicsillustration/w2.jpg";
import w3 from "../../img/comicsillustration/w3.jpg";
import w4 from "../../img/comicsillustration/w4.jpg";
import w5 from "../../img/comicsillustration/w5.jpg";
import w6 from "../../img/comicsillustration/w6.jpg";
import w7 from "../../img/comicsillustration/w7.jpg";
import w8 from "../../img/comicsillustration/w8.jpg";
import w9 from "../../img/comicsillustration/w9.jpg";
import w10 from "../../img/comicsillustration/w10.jpg";
import w11 from "../../img/workshops/w11.jpg";
import w12 from "../../img/workshops/w12.jpg";
import w13 from "../../img/workshops/w13.jpg";
import w14 from "../../img/workshops/w14.jpg";
import w15 from "../../img/workshops/w15.jpg";
import w16 from "../../img/workshops/w16.jpg";
import Preloader from "../Preloader";

const ComicsDummy = () => {
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
    }
  ];

  const img = images.map((img, i) => (
    <div className={`img img${i}`} data-id={i} key={i}>
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
      <section className="mainSection comicsDummy">
        <h3>
          curiosities <i className="fas fa-arrow-right"></i> comics - dummy
        </h3>
        <div className="comicsDummyImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default ComicsDummy;
