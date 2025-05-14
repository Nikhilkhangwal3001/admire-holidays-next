"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-28 bg-yellow-50 text-red-800">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Admire1.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center justify-center h-full bg-red-900/50">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg">
            Admire Holidays
          </h1>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-bold text-red-600">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-lg text-red-700">
          Admire Holidays is one of India’s trusted travel brands, creating unforgettable journeys and experiences.
        </p>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <Image src="/Delhi2.jpg" width={700} height={450} alt="Start" className="rounded-xl shadow-lg" />
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-red-600">How It All Began</h3>
          <p className="text-lg text-red-700">
            Since 2015, Admire Holidays has grown through trust and dedication—serving over 100 loyal clients nationwide.
          </p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-semibold text-red-600">Our Mission</h3>
          <p className="text-red-700 text-lg">
            To make travel joyful and affordable for every explorer.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <Image src="/mission.jpeg" width={600} height={400} alt="Mission" className="rounded-xl shadow-lg" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <Image src="/vision.png" width={600} height={400} alt="Vision" className="rounded-xl shadow-lg" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-semibold text-red-600">Our Vision</h3>
          <p className="text-red-700 text-lg">
            To create lasting memories for every traveler we serve.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-red-600">Why Choose Us</h3>
          <ul className="space-y-2 text-lg text-red-700 list-disc list-inside">
            <li><strong>End-to-End Support:</strong> Not just trips, full experiences.</li>
            <li><strong>Expert Guidance:</strong> Friendly travel professionals.</li>
            <li><strong>Affordable:</strong> Budget-friendly without compromise.</li>
            <li><strong>Safety First:</strong> We prioritize your peace of mind.</li>
          </ul>
        </div>
        <Image src="/Goa12.png" width={700} height={450} alt="Why Choose Us" className="rounded-xl shadow-lg" />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="bg-red-600 text-yellow-100 rounded-2xl p-12 text-center shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-4">Join the Admire Holidays Family</h2>
        <p className="text-lg mb-6">Start your journey with us today and make memories for a lifetime.</p>
        <a href="tel:1800-121-4252">
          <button className="bg-yellow-400 text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Book Your Trip
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default AboutUs;
