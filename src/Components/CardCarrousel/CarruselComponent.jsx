import React, { useState, useEffect } from "react";
import CardCarousel from "./CardCarousel";
// import Slider from "react-slick";
import styles from "./CardCarousel.module.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = require.context("./../../images", true);

const CarruselComponent = ({ projects }) => {
  return (
    <div
      className="my-4"
      style={{ width: "88%", margin: "auto", maxWidth: 1600 }}
    >
      <div className="row">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{ clickable: true }}
        >
          {projects &&
            projects.map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <CardCarousel project={project}></CardCarousel>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};
export default CarruselComponent;
