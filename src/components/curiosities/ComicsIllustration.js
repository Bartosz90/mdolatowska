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
import w11 from "../../img/comicsillustration/w11.jpg";
import w12 from "../../img/comicsillustration/w12.jpg";
import w13 from "../../img/comicsillustration/w13.jpg";
import w14 from "../../img/comicsillustration/w14.jpg";
import w15 from "../../img/comicsillustration/w15.jpg";
import w16 from "../../img/comicsillustration/w16.jpg";
import w17 from "../../img/comicsillustration/w17.jpg";
import w18 from "../../img/comicsillustration/w18.jpg";
import w19 from "../../img/comicsillustration/w19.jpg";
import w20 from "../../img/comicsillustration/w20.jpg";
import w21 from "../../img/comicsillustration/w21.jpg";
import w22 from "../../img/comicsillustration/w22.jpg";
import w23 from "../../img/comicsillustration/w23.jpg";
import w24 from "../../img/comicsillustration/w24.jpg";
import w25 from "../../img/comicsillustration/w25.jpg";
import Preloader from "../Preloader";

const ComicsIllustration = () => {
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
        "Scanned drawinngs + graphic tablet + photoshop - final illustration page 1",
    },
    {
      id: 1,
      src: w2,
      description: "Ink - final illustration page 2",
    },
    {
      id: 2,
      src: w3,
      description: "Pencil drawing",
    },
    {
      id: 3,
      src: w4,
      description:
        "Scanned ink drawing on tracing paper + photoshop - final illustration page 14 (I'm not satisfied with it, but I won't have time to redo it)",
    },
    {
      id: 4,
      src: w5,
      description: "Monoprinting at home 1",
    },
    {
      id: 5,
      src: w6,
      description: "Monoprinting at home 2",
    },
    {
      id: 6,
      src: w7,
      description:
        "Stencil for monoprinting + black background - I really like the simplicity of this combination",
    },
    {
      id: 7,
      src: w8,
      description: "Stencil before being removed from a print",
    },
    {
      id: 8,
      src: w9,
      description:
        "Paint that remained on stencil created a very interesting piece",
    },
    {
      id: 9,
      src: w10,
      description: "The same piece on black background",
    },
    {
      id: 10,
      src: w11,
      description:
        "Another unintentionally created piece - I love these colours",
    },
    {
      id: 11,
      src: w12,
      description: "A monoprint on a painted yellow paper",
    },
    {
      id: 12,
      src: w13,
      description:
        "Here I wanted to add a layer of black lines, but because I don't have a roller I think there was too much paint on the plate and it covered the whole print with black. I tried to rework it with acrylics.",
    },
    {
      id: 13,
      src: w14,
      description:
        "Another print, I'm very happy with the compositions and colours here",
    },
    {
      id: 14,
      src: w15,
      description:
        "Here I edited it in photoshop adding a scanned drawing and an outline of a woman",
    },
    {
      id: 15,
      src: w16,
      description:
        "This piece is a final outcome for page 6 - monoprint + acrylics; I'm very happy with this piece",
    },
    {
      id: 16,
      src: w17,
      description:
        "Another monoprint - I'm again happy with colour and composition here",
    },
    {
      id: 17,
      src: w18,
      description: "Monoprint + acrylics + neswpaper ",
    },
    {
      id: 18,
      src: w19,
      description:
        "'Ideas stuck in my head' - a drawing for page 5; I scanned this drawing and printed 5 copies on somerset watercolour paper in order to finish it with different techniques.",
    },
    {
      id: 19,
      src: w20,
      description:
        "First I tried to fill it with tones in Photoshop, however I found it difficult and I gave up. I think that tonal drawings are my weakness and I would like to work on it in the future.",
    },
    {
      id: 20,
      src: w21,
      description:
        "Here I wanted to crate a black and white piece using fineliners and think markers, but I gave up too. It was a very time-consuming method and the result was't worth it.",
    },
    {
      id: 21,
      src: w22,
      description:
        "This is a version that I am quite happy with. I recommend zooming in. - Acrylics A3",
    },
    {
      id: 22,
      src: w23,
      description:
        "Scanned drawing of the monster (pastels) + photoshop part 1",
    },
    {
      id: 23,
      src: w24,
      description: "A final piece for page 10",
    },
    {
      id: 24,
      src: w25,
      description: "A drawing that I am not going to use; coloured pencils.",
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
      <section className="mainSection comicsIllustrationSection">
        <h3>
          curiosities <i className="fas fa-arrow-right"></i> comics -
          illustration
        </h3>
        <div className="comicsIllustrationImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default ComicsIllustration;
