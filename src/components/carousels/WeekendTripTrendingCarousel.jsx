"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { MdOutlineDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import weekendTripExclusiveData from "@/data/weekendTripExclusive";
const WeekendTripTrendingCarousel = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 4, // Show 3 reviews on screens >= 1024px
              spacing: 12,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };
  return (
    <section className="">
      <div className="mx-auto max-w-[1340px]  sm:pt-32 pt-20 sm:px-8 px-3     lg:ps-8 ">
        <div className="max-w-7xl  items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h1 className="text-center   md:text-5xl text-2xl  ">
            Weekend Trending
          </h1>
          <div className="mt-8 sm:flex hidden gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border flex justify-center  items-center bg-[#ED9122] border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-5 w-5">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-white" // Apply 'text-black' class directly here
                >
                  <path
                    fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNextSlide}
              className="rounded-full border bg-[#ED9122] border-[#ED9122] p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-5 w-5">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-white" // Change this class to 'text-black'
                >
                  <path
                    fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className=" sm:mt-16 mt-8 lg:col-span-2  lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {weekendTripExclusiveData.map((item, i) => (
              <div className="keen-slider__slide" key={i}>
                <Link href={item.link}>
                  <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover rounded-xl object-center h-96 w-full md:w-96"
                    />

                    <div className=" rounded-xl  absolute w-full h-full py-6">
                      <div className="flex h-fit items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-500 to-yellow-400   relative top-0  ">
                        <MdOutlineDiscount color="white" size={20} />
                        Save upto {item.discount}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between item-center">
                    <p className="">{item.days}</p>
                    <div className="flex items-center gap-2">
                      <FaStar color="green" />
                      4.8 (120)
                    </div>
                  </div>
                  <div className="flex w-full text-sm px-1 mt-3  justify-between item-center">
                    <p>{item.title}</p>
                  </div>
                  <div className="flex h-fit rounded-lg mt-3 items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-600 to-yellow-400   relative top-0  ">
                    Early Summer sale !
                  </div>
                  <button className="flex w-full text-lg  mt-3  text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center item-center">
                    Explore
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 items-center justify-center sm:hidden flex gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full border flex justify-center  items-center bg-[#ED9122] border-red-[#ED9122] p-3 text-rose-600 transition  hover:text-white"
          >
            <span className="inline-block h-5 w-5">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-white" // Apply 'text-black' class directly here
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full border bg-[#ED9122] border-[#ED9122] p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
          >
            <span className="inline-block h-5 w-5">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-white" // Change this class to 'text-black'
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeekendTripTrendingCarousel;
