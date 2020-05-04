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
import w26 from "../../img/comicsillustration/26.jpg";
import w27 from "../../img/comicsillustration/27.jpg";
import w28 from "../../img/comicsillustration/28.jpg";
import w29 from "../../img/comicsillustration/29.jpg";
import w30 from "../../img/comicsillustration/30.jpg";
import w31 from "../../img/comicsillustration/31.jpg";
import w32 from "../../img/comicsillustration/32.jpg";
import w33 from "../../img/comicsillustration/33.jpg";
import w34 from "../../img/comicsillustration/34.jpg";
import w35 from "../../img/comicsillustration/35.jpg";
import w36 from "../../img/comicsillustration/36.jpg";
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
        "1. Scanned drawinngs + graphic tablet + photoshop - final illustration page 1",
    },
    {
      id: 1,
      src: w2,
      description: "2. Ink - final illustration page 2",
    },
    {
      id: 2,
      src: w3,
      description: "3. Pencil drawing",
    },
    {
      id: 3,
      src: w4,
      description:
        "4. Scanned ink drawing on tracing paper + photoshop - final illustration page 14 (I'm not satisfied with it, but I won't have time to redo it)",
    },
    {
      id: 4,
      src: w5,
      description: "5. Monoprinting at home 1",
    },
    {
      id: 5,
      src: w6,
      description: "6. Monoprinting at home 2",
    },
    {
      id: 6,
      src: w7,
      description:
        "7. Stencil for monoprinting + black background - I really like the simplicity of this combination",
    },
    {
      id: 7,
      src: w8,
      description: "8. Stencil before being removed from a print",
    },
    {
      id: 8,
      src: w9,
      description:
        "9. Paint that remained on stencil created a very interesting piece",
    },
    {
      id: 9,
      src: w10,
      description: "10. The same piece on black background",
    },
    {
      id: 10,
      src: w11,
      description:
        "11. Another unintentionally created piece - I love these colours",
    },
    {
      id: 11,
      src: w12,
      description: "12. A monoprint on a painted yellow paper",
    },
    {
      id: 12,
      src: w13,
      description:
        "13. Here I wanted to add a layer of black lines, but because I don't have a roller I think there was too much paint on the plate and it covered the whole print with black. I tried to rework it with acrylics.",
    },
    {
      id: 13,
      src: w14,
      description:
        "14. Another print, I'm very happy with the compositions and colours here",
    },
    {
      id: 14,
      src: w15,
      description:
        "15. Here I edited it in photoshop adding a scanned drawing and an outline of a woman",
    },
    {
      id: 15,
      src: w16,
      description:
        "16. This piece is a final outcome for page 6 - monoprint + acrylics; I'm very happy with this piece",
    },
    {
      id: 16,
      src: w17,
      description:
        "17. Another monoprint - I'm again happy with colour and composition here",
    },
    {
      id: 17,
      src: w18,
      description: "18. Monoprint + acrylics + neswpaper ",
    },
    {
      id: 18,
      src: w19,
      description:
        "19. 'Ideas stuck in my head' - a drawing for page 5; I scanned this drawing and printed 5 copies on somerset watercolour paper in order to finish it with different techniques.",
    },
    {
      id: 19,
      src: w20,
      description:
        "20. First I tried to fill it with tones in Photoshop, however I found it difficult and I gave up. I think that tonal drawings are my weakness and I would like to work on it in the future.",
    },
    {
      id: 20,
      src: w21,
      description:
        "21. Here I wanted to crate a black and white piece using fineliners and think markers, but I gave up too. It was a very time-consuming method and the result was't worth it.",
    },
    {
      id: 21,
      src: w22,
      description:
        "22. This is a version that I am quite happy with. I recommend zooming in. - Acrylics A3",
    },
    {
      id: 22,
      src: w23,
      description:
        "23. Scanned drawing of the monster (pastels) + photoshop part 1",
    },
    {
      id: 23,
      src: w24,
      description: "24. A final piece for page 10",
    },
    {
      id: 24,
      src: w25,
      description:
        "25. A drawing that I am not going to use; coloured pencils.",
    },
    {
      id: 25,
      src: w26,
      description: "26. Quick study for illustration page 9",
    },
    {
      id: 26,
      src: w27,
      description: "27. Illustration page 9 - fineliner",
    },
    {
      id: 27,
      src: w28,
      description: "28. Final illustration page 9 fineliner + black ink washes",
    },
    {
      id: 28,
      src: w29,
      description: "29. 'Perfecionism' a study",
    },
    {
      id: 29,
      src: w30,
      description: "30. 'Perfecionism' a study",
    },
    {
      id: 30,
      src: w31,
      description: "31. 'Perfecionism' a study",
    },
    {
      id: 31,
      src: w32,
      description: "32. 'Perfecionism' a study",
    },
    {
      id: 32,
      src: w33,
      description: "33. 'Perfecionism' a study",
    },
    {
      id: 33,
      src: w34,
      description: "34. 'Perfecionism' a study",
    },
    {
      id: 34,
      src: w35,
      description: "35. 'Perfecionism' a study",
    },
    {
      id: 35,
      src: w36,
      description: "36. Emotional intelligence, a quick study",
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
          illustrations
        </h3>
        <div className="comicsIllustrationImgContainer">{img}</div>
      </section>
      <BackToCuriositiesBtn />
    </>
  );
};

export default ComicsIllustration;
