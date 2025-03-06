"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Link from 'next/link'
const destinations = [
  {
    id: 1,
    name: "Kashmir",
    images: ["/Kashmir1.png", "/Kashmir3.png", "/Kashmir2.png"],
    path: "/packages/kashmir",
  },
  {
    id: 2,
    name: "Switzerland",
    images: ["/Himachal1.png","/Himachal2.png","/Himachal3.png"],
    path: "/packages/kashmir",
  },
  {
    id: 3,
    name: "Srilanka",
    images: ["/Srilaka2.jpg", "/Srilanka3.jpg", "/Srilanka1.jpg"],
    path: "/packages/kashmir",
  },
  {
    id: 4,
    name: "Bali",
    images: ["/Bali11.jpg", "/Bali12.jpg", "/Bali13.jpg"],
    path: "/packages/bali",
  },
  {
    id: 5,
    name: "Himachalpradesh",
    images: ["/Himachalpradesh1.jpg", "/Himachalpradesh2.jpg", "/Himachalpradesh3.jpg"],
    path: "/packages/kashmir",
  },
  {
    id: 6,
    name: "Kerala",
    images: ["/kerala13.jpg", "/kerala12.jpg", "/kerala11.jpg"],
    path: "/packages/kerala",
  },
  {
    id: 7,
    name: "Thailand",
    images: ["/Thailand21.jpg", "/Thailand22.jpg", "/Thailand23.jpg"],
    path: "/packages/thailand",
  },
  {
    id: 10,
    name: "Andaman",
    images: ["/Andaman41.jpg", "/Andaman42.jpg", "/Andaman43.jpg"],
    path: "/packages/kashmir",
  },
];

export default function TrendingDestinations() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-6xl font-extrabold text-red-600 drop-shadow-lg mb-14"
      >
        Trending Destinations
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div className="w-full h-64 md:h-48 lg:h-56 relative rounded-lg overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              {destination.name}
            </motion.div>
            <Link href={destination.path}><motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-50 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md"
            >
              Explore Now
            </motion.div></Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
