"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import conf from "../../../conf/conf";

export default function TrendingDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API Data
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const {data} = await axios.get(`${conf.laravelBaseUrl}/public-itineraries-trending`);
       console.log("Trending.jsx", data);
        setDestinations(data); // Assuming API returns an array of destinations
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }


    if(destinations.length == 0){
      fetchDestinations();
    }

    
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

      {loading ? (
        <p className="text-lg text-gray-600">Loading destinations...</p>
      ) : error ? (
        <p className="text-lg text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {destinations.length > 0 && destinations.map((destination, index) => (
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
                  {destination?.destination_images?.length > 0 ? (
  destination.destination_images.map((image, idx) => (
    <SwiperSlide key={idx}>
      <Image
        src={image.startsWith("http") ? image : `${conf.laravelBaseUrl}/${image}`}
        alt={destination.title || "Destination"}
        layout="fill"
        objectFit="cover"
        className="transition-transform -z-20 duration-700 ease-in-out"
      />
    </SwiperSlide>
  ))
) : (
  <SwiperSlide>
    <Image
      src="/default-placeholder.jpg" // Provide a default image in public folder
      alt="Default Destination"
      layout="fill"
      objectFit="cover"
      className="transition-transform -z-20 duration-700 ease-in-out"
    />
  </SwiperSlide>
)}
                </Swiper>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {destination.title}
              </motion.div>
              <Link href={destination.slug || "#"}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-50 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md"
                >
                  Explore Now
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
