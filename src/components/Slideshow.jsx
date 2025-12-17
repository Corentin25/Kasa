import { useState } from "react";
import arrowLeft from "../assets/arrow-slide-left.png";
import arrowRight from "../assets/arrow-slide-right.png";

import "../styles/slideshow.scss";

export function Slideshow({ pictures }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const previousSlide = () => {
    setSlideIndex(slideIndex === 0 ? pictures.length - 1 : slideIndex - 1);
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === pictures.length - 1 ? 0 : slideIndex + 1);
  };

  return (
    <section className="slideShow">
      <img
        src={pictures[slideIndex]}
        alt="Photo du logement"
        className="imgSlideshow"
      />
      {pictures.length > 1 && (
        <div className="arrowsBloc">
          <img
            src={arrowLeft}
            alt="Flèche précédent"
            className="arrows"
            onClick={previousSlide}
          />
          <img
            src={arrowRight}
            alt="Flèche suivant"
            className="arrows"
            onClick={nextSlide}
          />
        </div>
      )}
      {pictures.length > 1 && (
        <span className="numberSlide">
          {slideIndex + 1} / {pictures.length}
        </span>
      )}
    </section>
  );
}
