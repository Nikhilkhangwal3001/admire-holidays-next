"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaPhoneAlt, FaPlane, FaInfoCircle } from "react-icons/fa";

const points = [
  { icon: <FaCheck />, text: "Wide range of exclusive deals with resorts." },
  { icon: <FaPhoneAlt />, text: "24*7 helpline support." },
  { icon: <FaCheck />, text: "Detailed and clear package info." },
  { icon: <FaCheck />, text: "Local support for hassle-free travel." },
  { icon: <FaPlane />, text: "Deals on flight bookings." },
  { icon: <FaCheck />, text: "Quick & easy booking process." },
];

const CreativeWhyBook = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-12 text-gray-900">
      
      {/* Left Side - Big Bold Message */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 max-w-lg"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Why <span className="underline decoration-yellow-600 decoration-4">Book</span> <br /> 
          <span className="text-yellow-600">Admire Holidays?</span> <br /> <span className="text-4xl"></span>
        </h1>
        <p className="text-lg md:text-xl font-semibold max-w-md">
          Your perfect travel starts here — exclusive deals, nonstop support, and seamless booking.
        </p>
      </motion.div>

      {/* Right Side - Feature Points */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 max-w-md"
      >
        <div className="space-y-6">
          {points.map(({ icon, text }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ minHeight: "72px" }}
            >
              <div className="text-yellow-600 flex-shrink-0 text-2xl">
                {icon}
              </div>
              <p className="text-lg font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: points.length * 0.15 + 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-3 border-l-4 border-yellow-600 pl-4 text-yellow-700 font-semibold"
          style={{ minHeight: "48px" }}
        >
          <FaInfoCircle size={20} />
          <span>Note: Air ticketing extra.</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreativeWhyBook;
