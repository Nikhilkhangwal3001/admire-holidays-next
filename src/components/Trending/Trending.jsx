"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const destinations = [
  {
    id: 1,
    name: "Kashmir",
    images: ["/Kashmir1.png", "/Kashmir3.png", "/Kashmir2.png"],
  },
  {
    id: 2,
    name: "Switzerland",
    images: ["/Himachal1.png","/Himachal2.png","/Himachal3.png"],
  },
  {
    id: 3,
    name: "Srilanka",
    images: ["/Srilaka2.jpg", "/Srilanka3.jpg", "/Srilanka1.jpg"],
  },
  {
    id: 4,
    name: "Bali",
    images: ["/Bali11.jpg", "/Bali12.jpg", "/Bali13.jpg"],
  },
  {
    id: 5,
    name: "Himachalpradesh",
    images: ["/Himachalpradesh1.jpg", "/Himachalpradesh2.jpg", "/Himachalpradesh3.jpg"],
  },
  {
    id: 6,
    name: "Kerala",
    images: ["/kerala13.jpg", "/kerala12.jpg", "/kerala11.jpg"],
  },
  {
    id: 7,
    name: "Thailand",
    images: ["/Thailand21.jpg", "/Thailand22.jpg", "/Thailand23.jpg"],
  },
  // {
  //   id: 8,
  //   name: "Haridwar",
  //   images: ["/Haridwar1.jpg", "/Haridwar11.jpeg", "/Haridwar13.jpeg"],
  // },
  // {
  //   id: 9,
  //   name: "JammuKashmir",
  //   images: ["/JammuKashmir1.jpg", "/JammuKashmir2.jpg", "/JammuKashmir3.jpg"],
  // },
  {
    id: 10,
    name: "Andaman",
    images: ["/Andaman41.jpg", "/Andaman42.jpg", "/Andaman43.jpg"],
  },
  // {
  //   id: 11,
  //   name: "Dubai",
  //   images: ["/dubai1.jpg", "/dubai2.jpg", "/dubai3.jpg"],
  // },
 
];

export default function TrendingDestinations() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-16  text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 text-red-600"
      >
        Trending Destinations
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl cursor-pointer"
          >
            <div className="w-full h-96 relative rounded-xl overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
              >
                {destination.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={image}
                      alt={destination.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform -z-20 duration-700 ease-in-out"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              {destination.name}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md"
            >
              Explore Now
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
