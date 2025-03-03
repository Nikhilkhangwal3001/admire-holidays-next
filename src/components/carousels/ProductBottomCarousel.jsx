"use client";
import productCarouselBottom from "@/data/ProductBottomCarousel";
import Link from "next/link";
import Image from "next/image";
import {
  ButtonBack,
  CarouselProvider,
  Slide,
  Slider,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductBottomCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 px-5 py-20">
      <h1 className="font-semibold md:text-4xl text-2xl mb-10">You May Like</h1>
      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={300}
        naturalSlideHeight={240}
        totalSlides={5}
        visibleSlides={3}
        step={1}
        infinite
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack className="absolute rounded-full flex justify-center items-center p-3 border-[1px] top-[-60px] right-12 border-gray-700 bg-opacity-60 z-30 cursor-pointer">
            <svg width={15} height={15} viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="gray" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              {productCarouselBottom.map((item, i) => (
                <Slide key={i}>
                  <Link href={item.link}>
                    <div className="flex relative flex-col pb-5 bg-white rounded-lg w-fit gap-5">
                      <div className="relative w-[300px] h-[240px]">
                        <Image
                          src={item.imageUrl}
                          alt="Image"
                          fill
                          className="object-cover rounded-t-lg"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center absolute w-full py-5 px-2 justify-between">
                        <button className="bg-[#FD4A4C] text-sm text-white px-5 py-1 rounded-md">Featured</button>
                        <div className="p-2 bg-white rounded-full">
                          <IoMdHeartEmpty size={20} color="gray" />
                        </div>
                      </div>
                      <div className="flex flex-col px-5 gap-3 -mt-10">
                        <div className="justify-center bg-white border-[1px] text-[#00BB98] rounded-lg border-[#00BB98] w-28 items-center flex gap-2 py-1">
                          <CiClock2 size={20} color="#00BB98" /> {item.time}
                        </div>
                        <h5 className="text-xl font-semibold">{item.location}</h5>
                        <div className="flex text-sm gap-1 items-center">
                          <CiLocationOn size={20} color="#00BB98" /> {item.about}
                        </div>
                        <button className="bg-[#FD4A4C] w-36 font-medium text-white flex justify-center items-center py-2 rounded-md">Explore</button>
                      </div>
                    </div>
                  </Link>
                </Slide>
              ))}
            </Slider>
          </div>
          <ButtonNext className="absolute rounded-full p-3 border-[1px] border-gray-700 bg-opacity-50 z-30 right-0 top-[-60px]">
            <svg width={15} height={15} viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="gray" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ProductBottomCarousel;
