import React from "react";

// import testimonials data
import { testimonials } from "../data.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../testimonialSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import {Slide} from "react-awesome-reveal";

const TestimonialSlider = () => {
  return (
    <>
        <Slide>
        <h2 className="text-2xl text-center font-primary font-extrabold mb-1 mt-[3rem]">
            Client Testimonials{" "}
        </h2>
        </Slide>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className="relative lg:mt-[24px] before:content-quote p-8">
                <div>
                  <p className="text-2xl">{text}</p>
                  <div className="flex items-center mt-[1px]">
                    <img src={image} alt="" />
                    <div className="ml-4">
                      <h6 className="font-bold">{name}</h6>
                      <p className="text-sm">{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
