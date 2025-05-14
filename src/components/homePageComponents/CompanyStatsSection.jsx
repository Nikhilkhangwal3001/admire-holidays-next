"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaBox,
  FaMapMarkedAlt,
  FaBusinessTime,
  FaStar,
} from "react-icons/fa";

const CompanyStatsSection = () => {
  const [stats, setStats] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    fetch("https://admiredashboard.theholistay.in/public-get-counter")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const items = stats
    ? [
        {
          title: "Packages",
          number: stats.packages,
          icon: <FaBox className="text-5xl text-[#fffbeb]" />,
        },
        {
          title: "Destinations Covered",
          number: stats.destinations_covered,
          icon: <FaMapMarkedAlt className="text-5xl text-[#fffbeb]" />,
        },
        {
          title: "Years in Business",
          number: stats.years_in_business,
          icon: <FaBusinessTime className="text-5xl text-[#fffbeb]" />,
        },
        {
          title: "Rating",
          number: stats.rating,
          icon: <FaStar className="text-5xl text-[#fffbeb]" />,
        },
      ]
    : [];

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-[#155146] via-[#1e3a34] to-[#0a1e1c] mt-28 py-20 mb-28 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/stars.svg')] bg-cover pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Beautiful Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 drop-shadow-lg">
          Milestones That Speak for Themselves
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-white transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:scale-105 hover:shadow-yellow-300/50`}
            >
              <div className="mb-4">{item.icon}</div>
              <div className="text-5xl font-extrabold text-yellow-300">
                <CountUp
                  start={isVisible ? 0 : null}
                  end={item.number}
                  duration={2.5}
                />
              </div>
              <p className="text-lg mt-3 font-medium text-gray-100 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsSection;
