// import * as React from "react";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/slider.sass";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={index}
            {...handlers}
          >
            <div
              className="img"
              style={{ backgroundImage: `url(${obj.img})` }}
            ></div>
            <div className="info">
              {obj.data.pretitle ? <h4>{obj.data.pretitle}</h4> : ""}
              <h1 dangerouslySetInnerHTML={{ __html: obj.data.title }}></h1>
              {obj.data.button ? (
                <a href={obj.data.button.link}>{obj.data.button.text}</a>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
