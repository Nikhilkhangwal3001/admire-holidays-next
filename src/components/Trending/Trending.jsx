"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import axios from "axios";

const IMAGE_BASE_URL = "https://admiredashboard.theholistay.in/";

export default function TrendingDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(
          "https://admiredashboard.theholistay.in/public-trending-destinations-images"
        );
        setDestinations(data);
      } catch (err) {
        setError("Failed to fetch destinations.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  return (
    <section className="py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-5xl font-extrabold text-red-600 drop-shadow-lg mb-10"
      >
        Trending Destinations
      </motion.h2>

      {loading ? (
        <p className="text-lg text-gray-600">Loading destinations...</p>
      ) : error ? (
        <p className="text-lg text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl m-auto gap-4 px-2">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-md shadow-md cursor-pointer"
            >
              <div className="w-full h-44 md:h-48 lg:h-52 relative rounded-md overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="w-full h-full"
                >
                  {destination.images?.slice(0, 3).map((imgPath, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={`${IMAGE_BASE_URL}${imgPath}`}
                        alt={destination.destination}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 ease-in-out"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <p className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1 text-sm font-semibold z-10">
                  {destination.destination}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
