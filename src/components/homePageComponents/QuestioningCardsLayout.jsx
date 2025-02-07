"use client";
import React, { useEffect } from "react";
import QuestioningCard from "../cards/QuestioningCard";
import { SiIcomoon } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const QuestioningCardsLayout = () => {
  useEffect(() => {
    console.log("AOS initialization");
    AOS.init({
      duration: 5000,
      once: false,
    });
  }, []);
  return (
    <section
      className="max-w-7xl sm:pt-32  pt-20  mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3  md:grid-cols-2 grid-cols-1"
      data-aos="fade-up"
    >
      <QuestioningCard
        data-aos="fade-up"
        iconName={<SiIcomoon color="#FD4A4C" size={100} />}
        text={"Tell us what you want to do"}
      />
      <QuestioningCard
        data-aos="fade-up"
        iconName={<FaCar color="#A47EC8" size={100} />}
        text={"Share your travel preference"}
      />
      <QuestioningCard
        data-aos="fade-up"
        iconName={<BsStars color="#6CC417" size={100} />}
        text={"We’ll give you recommendations"}
      />
    </section>
  );
};

export default QuestioningCardsLayout;
