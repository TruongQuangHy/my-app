import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination } from "swiper/modules";
export default function SliderSection() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto h-full w-full flex flex-col items-start justify-center gap-5 ">
        <h1 className="text-5xl font-semibold  uppercase">
          bạn học được gì từ khóa học này
        </h1>
        <span className="text-md max-w-2xl">
          Sau khóa học, bạn sẽ có thể tự tin sử dụng Cháo Vantage nhưu một phần
          không thể thiếu trong quy trình diễn họa!
        </span>
      </div>
      <div className="py-10">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="slider1.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider1.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider1.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="slider1.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
