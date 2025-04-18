"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link';

const API_URL = "https://admiredashboard.theholistay.in/public-domestic-destinations-images";
const BASE_URL = "https://admiredashboard.theholistay.in/";

const TrendingDestination = () => {
  const mainSlider = useRef(null);
  const mainKeen = useRef(null);
  const autoSlide = useRef(null);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API_URL);
        setDestinations(res.data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (mainSlider.current && !mainKeen.current && destinations.length > 0) {
      mainKeen.current = new KeenSlider(mainSlider.current, {
        loop: true,
        slides: { perView: 1, spacing: 15 },
        breakpoints: {
          "(min-width: 640px)": { slides: { perView: 1.5, spacing: 20 } },
          "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
        },
      });

      autoSlide.current = setInterval(() => {
        mainKeen.current?.next();
      }, 8000);
    }

    return () => {
      mainKeen.current?.destroy();
      clearInterval(autoSlide.current);
    };
  }, [destinations]);

  return (
    <section className="mt-28">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[#261F43] md:text-5xl text-3xl font-bold">Domestic Package</h2>
          <p className="text-[15px] mt-2 text-red-600">Budget packages in India</p>
        </div>

        <div ref={mainSlider} className="keen-slider">
          {destinations.map((item, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <Link href={`trending-destination/${item.slug}`}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    {item.public_images.length > 0 && (
                      <Image
                        src={`${BASE_URL}${item.public_images[0]}`}
                        alt={`${item.destination}`}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#4D456B]">{item.destination}</h3>

                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {item.public_images.slice(0, 3).map((img, i) => (
                        <Image
                          key={i}
                          src={`${BASE_URL}${img}`}
                          alt={`Image ${i + 1}`}
                          width={100}
                          height={100}
                          className="object-cover w-full h-20 rounded"
                        />
                      ))}
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <span className="text-xl">📞</span>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#CF1E27" }}
                        className="flex-1 px-4 py-2 bg-[#E69233] text-white font-semibold rounded-md"
                      >
                        Know More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;
