import React from "react";
// import Swiper core and required modules
import Image from 'next/image'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "../../../styles/custom.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwiperProductCarousel = ({ carouselImageUrl }) => {
  return (
    <>
      <div className="lg:flex hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 3000 }} // added
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={false}
        >
          <div
            id="slider"
            className="h-full py-10 flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          ></div>
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {carouselImageUrl.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex  flex-shrink-0  relative w-full sm:w-auto">
                <Image
                  src={img}
                  alt="img"
                  className="object-cover rounded-xl object-center "
                />
                <div className=" rounded-xl  absolute w-full h-full py-6">
                  <div className="flex h-full items-end  relative pb-6"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:flex lg:hidden hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 3000 }} // added
          loop={true}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={false}
        >
          <div
            id="slider"
            className="h-full py-10 flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          ></div>
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {carouselImageUrl.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex  flex-shrink-0  relative w-full sm:w-auto">
                <Image
                  src={img}
                  alt="img"
                  className="object-cover rounded-xl object-center "
                />
                <div className=" rounded-xl  absolute w-full h-full py-6">
                  <div className="flex h-full items-end  relative pb-6"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:flex md:hidden flex">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 3000 }} // added
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={false}
        >
          <div
            id="slider"
            className="h-full py-10 flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          ></div>
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {carouselImageUrl.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex  flex-shrink-0  relative w-full sm:w-auto">
                <Image
                  src={img}
                  alt="img"
                  className="object-cover w-full rounded-xl object-center "
                />
                <div className=" rounded-xl  absolute w-full h-full py-6">
                  <div className="flex h-full items-end  relative pb-6"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperProductCarousel;
