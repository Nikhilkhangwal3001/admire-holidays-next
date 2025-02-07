"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Prathmesh Sagare,Mumbai",
      quote:
        "My contact at Admire Holidays was Mr. Sandeep. He followed up daily during my trip, resolving queries promptly. Our Manali-Kulu trip was enjoyable, with good hotels but average food. Driver Mr. Saurabh was exceptional.",
      rating: 5,
      image: "review1Image.jpg",
    },
    {
      name: "Akash Desarda,Mumbai",
      quote:
        " I will definitely recommend to use service of Admire holidays. We booked Andaman honeymoon package. It was very good experience. We got complete support from beginning till our vacation was completed.",
      rating: 5,
      image: "review2Image.jpg",
    },
    {
      name: " Prabhul, Kerala",
      quote:
        "I booked a Thailand holiday package for my parents through Admire Holidays. Sandeep from Admire Holidays provided exceptional service, ensuring a smooth trip. My parents returned happy and had an amazing experience.👏🏻👏🏻👏🏻",
      rating: 5,
      image: "review3Image.jpg",
    },
    {
      name: "Sudeeti Chaturvedi,Lucknow",
      quote:
        "We had a good experience with admire holidays.The entire trip was smoothly coordinated by them and they are available at any time to answer the phone calls.good hospitality affordable rate",
      rating: 5,
      image: "review4Image.jpg",
    },
    {
      name: "Sonal Sahu,Mumbai",
      quote:
        "It was nice trip to Andaman with admire holidays they provided best facilities to visit your dream places...",
      rating: 5,
      image: "review5Image.jpg",
    },
    {
      name: "Janak Kawa",
      quote:
        "We booked andamans tour with admire holidays. The trip was really beautiful and memorable. Accommodation arranged by Sandeep ji, admire holidays was simply top class. All the travel arrangements outstanding. Will really recommend their service and packages as they are best in class and pretty decent priced.👍🏼",
      rating: 5,
      image: "review6Image.jpg",
    },
    {
      name: "Rohit Reda",
      quote:
        "Admire Holidays provided excellent service throughout my trip. I was highly satisfied with their professionalism and attention to detail. Definitely recommend them for a memorable travel experience.",
      rating: 5,
      image: "review7Image.jpg",
    },
    {
      name: "Nitanshu Gupta",
      quote:
        "I received good services and timely care during the tour. Admire Holidays ensured a smooth and enjoyable trip, making it hassle-free and memorable. Will choose them again!",
      rating: 5,
      image: "review8Image.jpg",
    },
    {
      name: "Vivek Chand",
      quote:
        "My trip to Gangtok and Darjeeling with Admire Holidays was wonderful. They provided top-notch facilities, ensuring I visited my dream places hassle-free. Highly recommended for your travel needs!",
      rating: 5,
      image: "review9Image.jpg",
    },
    {
      name: "Ashok Parmar",
      quote:
        " I have a great experience with Admire holidays with my holidays tour shimla, kulu, manali, Rohtang i have lots of enjoy there with 0 complained .It's a great travel agency with nice facility professional drivers to traveling lovers",
      rating: 5,
      image: "review10Image.jpg",
    },
  ];
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 32,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 32,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 3 reviews on screens >= 1024px
              spacing: 32,
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
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6  lg:py-16  lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border flex justify-center  items-center bg-red-600 border-red-500 p-3 text-rose-600 transition  hover:text-white"
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
              className="rounded-full border bg-red-600 border-rose-600 p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
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

        <div className=" sm:mt-16 mt-8 lg:col-span-2 sm:px-8  px-3 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {testimonials.map((item, i) => (
              <div
                className="keen-slider__slide flex flex-col  items-start "
                key={i}
              >
                <img
                  className="mx-auto  mb-6 h-[75px] rounded-full shadow-lg dark:shadow-black/20 w-[75px]"
                  src={item.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap w-full  justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 w-full text-center text-lg font-bold">
                      {item.name}
                    </h5>
                  </div>
                </div>
                <p className=" sm:text-base px-3  text-sm">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
