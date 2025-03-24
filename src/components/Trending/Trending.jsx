"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
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
  const router = useRouter(); // Define router
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(`${conf.laravelBaseUrl}/public-itineraries-trending`);
        setDestinations(data);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, [router]); // Add 'router' to dependency array

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
          {destinations.map((destination, index) => (
            <Link key={destination.id} href={`trending-destination/${destination.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <div className="w-full h-64 md:h-48 lg:h-56 relative rounded-lg overflow-hidden">
                  <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop={true} className="w-full h-full">
                    <SwiperSlide>
                      <Image
                        src={`${conf.laravelBaseUrl.replace(/\/$/, "")}/${destination.destination_thumbnail.replace(/^\//, "")}`}
                        alt={destination.title || "Destination"}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 ease-in-out"
                      />
                    </SwiperSlide>
                  </Swiper>

                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-50 font-semibold text-2xl">
                    {destination.selected_destination}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
