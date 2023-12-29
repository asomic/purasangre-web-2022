import React, { useRef, useCallback } from "react";
// import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import dataCoaches from "../lib/dataCoaches";

import "swiper/css/navigation";
import "../styles/coaches.sass";

import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right.svg";

const Coaches = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="coaches">
      <div className="coaches-header">
        <h1 className="color-turquoiseBlue">Coaches</h1>
      </div>
      <Swiper
        className="coaches-content"
        slidesPerView={1}
        spaceBetween={20}
        ref={sliderRef}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
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
                    {slide.grades ? (
                      <>
                        <p className="title">Grados</p>
                        <p>{slide.grades}</p>
                      </>
                    ) : (
                      <>
                        <p className="title">Experiencia</p>
                        <p>{slide.experience}</p>
                      </>
                    )}
                  </div>
                  <div className="item">
                    {
                      slide.certifications ? (
                        <>
                          <p className="title">Certificaciones</p>
                          <ul>
                            {slide.certifications.map((cert, i) => {
                              return <li key={i}>{cert}</li>;
                            })}
                          </ul>
                        </>
                      ) : null
                    }
                    {/* <p className="title">Certificaciones</p>
                    <ul>
                      {slide.certifications
                        ? slide.certifications.map((cert, i) => {
                            return <li key={i}>{cert}</li>;
                          })
                        : null}
                    </ul> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`prev-arrow `} onClick={handlePrev}>
        <img src={ArrowLeft} alt="Mover a la izquierda" />
      </div>
      <div className={`next-arrow`} onClick={handleNext}>
        <img src={ArrowRight} alt="Mover a la derecha" />
      </div>
    </section>
  );
};

export default Coaches;
