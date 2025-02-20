"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TourismAlliance = () => {
  const hotelsData = [
    {
      id: 1,
      imageUrl: "royalHeritageLogo.png",
    },
    {
      id: 2,
      imageUrl: "pineViewLogo.png",
    },
    {
      id: 3,
      imageUrl: "pillicanLogo.png",
    },
    {
      id: 4,
      imageUrl: "reefValley.png",
    },
    {
      id: 5,
      imageUrl: "sangrilla.png",
    },
    {
      id: 6,
      imageUrl: "casaMontana.png",
    },
    {
      id: 7,
      imageUrl: "munnarCastle.png",
    },
    {
      id: 8,
      imageUrl: "bambooDale.png",
    },
    {
      id: 9,
      imageUrl: "periyarNest.png",
    },
    {
      id: 10,
      imageUrl: "grandThekaddy.png",
    },
    {
      id: 11,
      imageUrl: "sangrilla.png",
    },
  ];

  const animation = { duration: 18000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 288px)": {
        slides: {
          origin: "auto",
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 768px)": {
        slides: {
          origin: "auto",
          perView: 3,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 5,
          spacing: 32,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.next();
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-8  sm:px-6 mt-12 lg:ps-8 pt-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hotel Alliances
          </h2>
        </div>

        <div className="sm:mt-16 mt-4 lg:col-span-2 px-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {hotelsData.map((item, i) => (
              <div
                className="keen-slider__slide h-48 w-24 flex items-center "
                key={item.id}
              >
                <img
                  className="mx-auto mb-6 w-full max-h-full max-w-full dark:shadow-black/20"
                  src={item.imageUrl}
                  alt="avatar"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismAlliance;
