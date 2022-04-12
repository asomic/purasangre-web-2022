import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import dataCoaches from "../lib/dataCoaches";

import "../styles/coaches.sass";

const Coaches = () => {
  return (
    <section className="coaches">
      <div className="coaches-header">
        <h1 className="color-turquoiseBlue">Coaches</h1>
      </div>
      <Swiper
        className="coaches-content"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 3,
          },
        }}
      >
        {dataCoaches.map((slide, index) => {
          return (
            <SwiperSlide className="coach" key={index}>
              <div
                className="coach-inner"
                style={{ backgroundImage: "url(" + slide.image + ")" }}
              >
                <div className="coach-header">
                  <p className="pretitle">{slide.title}</p>
                  <h2>{slide.name}</h2>
                </div>
                <div className="coach-content">
                  <div className="item">
                    <p className="title">Grados</p>
                    <p>{slide.grades}</p>
                  </div>
                  <div className="item">
                    <p className="title">Certificaciones</p>
                    <ul>
                      {slide.certifications.map((cert, i) => {
                        return <li key={i}>{cert}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Coaches;
