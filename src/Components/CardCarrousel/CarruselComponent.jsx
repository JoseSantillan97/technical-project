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
  
  
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1100px)").matches
  )
  useEffect(() => {
    if(window.innerWidth > 1100){
      window
        .matchMedia("(max-width: 1100px)")
        .addEventListener('change', e => setMatches(e.matches));
        console.log('match 1:', matches)
    }
    else if( window.innerWidth < 768 ){
      window
        .matchMedia("(max-width: 768px)")
        .addEventListener('change', e => setMatches(e.matches));
        console.log('match 2:', matches)
    }
  }, []);
  
  return (
    <div
      className="my-4"
      style={{ width: "88%", margin: "auto", maxWidth: 1600 }}
    >
      <div className="row">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={matches ? 2 : 4}
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
