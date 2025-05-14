"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const TourismAlliance = () => {
  const hotelsData = [
    { id: 1, imageUrl: "/royalHeritageLogo.png" },
    { id: 2, imageUrl: "/pineViewLogo.png" },
    { id: 3, imageUrl: "/pillicanLogo.png" },
    { id: 4, imageUrl: "/reefValley.png" },
    { id: 5, imageUrl: "/sangrilla.png" },
    { id: 6, imageUrl: "/casaMontana.png" },
    { id: 7, imageUrl: "/munnarCastle.png" },
    { id: 8, imageUrl: "/bambooDale.png" },
    { id: 9, imageUrl: "/periyarNest.png" },
    { id: 10, imageUrl: "/grandThekaddy.png" },
    { id: 11, imageUrl: "/sangrilla.png" },
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
        slides: { origin: "auto", perView: 2, spacing: 32 },
      },
      "(min-width: 768px)": {
        slides: { origin: "auto", perView: 3, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { origin: "auto", perView: 5, spacing: 32 },
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

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
             Hotel Alliances
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted partners offering unique and comfortable stays.
          </p>
        </div>

        <div className="px-2">
          <div ref={sliderRef} className="keen-slider">
            {hotelsData.map((item) => (
              <div
                className="keen-slider__slide flex items-center justify-center"
                key={item.id}
              >
                <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden shadow-md bg-white p-3 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    src={item.imageUrl}
                    alt="Hotel Logo"
                    width={192}
                    height={192}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismAlliance;
