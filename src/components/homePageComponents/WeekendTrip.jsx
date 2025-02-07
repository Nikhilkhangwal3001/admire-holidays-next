"use client";
import React from "react";
import WeekendTripTrendingCarousel from "../carousels/WeekendTripTrendingCarousel";
import WeekendTripStateCarousel from "../carousels/WeekendTripStateCarousel";
const WeekendTrip = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <WeekendTripTrendingCarousel />
      <WeekendTripStateCarousel />
    </section>
  );
};

export default WeekendTrip;
