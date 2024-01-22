import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/slider.sass";
import dataSlider from "../lib/dataSlider";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {dataSlider.map((obj, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${obj.img})` }}
          >
            <div className="info">
              {obj.data.pretitle ? <h4>{obj.data.pretitle}</h4> : ""}
              <h1 dangerouslySetInnerHTML={{ __html: obj.data.title }}></h1>
              {obj.data.button ? (
                <a href={obj.data.button.link} className="button turquoise">
                  {obj.data.button.text} &gt;
                </a>
              ) : (
                ""
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
