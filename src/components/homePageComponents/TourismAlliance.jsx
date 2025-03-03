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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl flex items-center justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hotel Alliances
          </h2>
        </div>

        {/* Hotel Slider */}
        <div className="sm:mt-16 mt-6 lg:col-span-2 px-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {hotelsData.map((item) => (
              <div
                className="keen-slider__slide flex items-center justify-center"
                key={item.id}
              >
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                  <Image
                    src={item.imageUrl}
                    alt="Hotel Logo"
                    width={192} // Set width
                    height={192} // Set height
                    className="object-contain"
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
