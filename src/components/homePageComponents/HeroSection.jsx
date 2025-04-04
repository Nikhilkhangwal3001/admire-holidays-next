"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-hero-section-videos"
        );

        console.log("Hero Video API Response:", response.data);

        if (response.data.length > 0 && response.data[0].video_url) {
          setVideoUrl(
            `https://admiredashboard.theholistay.in/${response.data[0].video_url}`
          );
        }
      } catch (error) {
        console.error("Error fetching hero section video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroVideo();
  }, []);

  return (
    <section className="relative w-full md:h-[611px] overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {loading ? (
          <p className="text-white text-center mt-10">Loading Video...</p>
        ) : videoUrl ? (
          <video
            className="absolute w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
          />
        ) : (
          <p className="text-white text-center mt-10">
            Video not available
          </p>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex pt-32 items-center lg:gap-4 gap-10 lg:flex-row flex-col justify-start">
        <div className="flex flex-col gap-10 py-10 lg:pl-32 px-5">
          <p className="text-white text-xl font-LaBelle">
            Travel Around The World
          </p>
          <h1 className="lg:text-6xl text-white md:text-5xl sm:block text-2xl font-bold">
            Discover the <br /> most engaging <br /> places
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
