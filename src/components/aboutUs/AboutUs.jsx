"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-28  text-gray-800">
      {/* Welcome Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold text-teal-700">
          Welcome to Admire Holidays!
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Admire Holidays is more than just a tour and travel company; we are
          your gateway to unforgettable experiences and remarkable journeys.
          With a legacy spanning over 10 years, we have established ourselves as
          a trusted name in the travel and tourism industry, committed to
          delivering excellence at every step of your journey.
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
        <video
          src="/about1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg"
        ></video>
        {/* <video src="/public/about1.mp4" width={700} height={450} alt="Our Story" className="rounded-xl shadow-lg" /> */}
        <div className="space-y-4">
          {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="space-y-4 "
      >
        <h2 className="text-4xl font-bold text-teal-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          With a legacy spanning over 10 years, Admire Holidays has become a
          trusted name in travel and tourism, committed to delivering excellence
          at every step.
        </p>
      </motion.div>
          <h3 className="text-3xl font-semibold text-teal-700">Our Story</h3>
          <p className="text-lg text-gray-700">
            Our journey began with a simple yet profound mission: to help people
            explore the beauty of our world. Over the years, we have honed our
            expertise and expanded our services to cater to the diverse needs of
            travelers from all walks of life. Whether you seek adventure in the
            mountains, tranquility by the beach, or cultural immersion in
            vibrant cities, Admire Holidays is here to make your travel dreams a
            reality.
          </p>
        </div>
      </motion.div>

      {/* What Sets Us Apart */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-teal-700">
            What Sets Us Apart
          </h3>
          <p className="text-lg text-gray-700">
            At Admire Holidays, we believe that travel is not just about
            reaching a destination; its about the journey itself. Thats why we
            go above and beyond to ensure that every aspect of your travel
            experience is seamless and unforgettable. From meticulously planned
            itineraries to personalized recommendations, our team of experienced
            professionals is dedicated to providing you with unparalleled
            service and support every step of the way.
          </p>
        </div>
        <Image
          src="/about2.png"
          width={700}
          height={450}
          alt="Difference"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h3 className="text-3xl font-semibold text-teal-700">Our Values</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Integrity, transparency, and customer satisfaction are at the heart of
          everything we do. We pride ourselves on our commitment to ethical
          business practices and our unwavering dedication to exceeding our
          clients’ expectations. Your trust is our most valuable asset, and we
          strive to earn it through our actions, integrity, and dedication to
          delivering exceptional travel experiences.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-teal-700">
            Why Choose Admire Holidays
          </h3>
          <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>
              <strong>Experience:</strong> With over 10 years of experience in
              the industry, we have the knowledge and expertise to create
              unforgettable travel experiences tailored to your unique
              preferences and interests.
            </li>
            <li>
              <strong>Personalized Service:</strong> We understand that no two
              travelers are alike, which is why we take the time to understand
              your needs and preferences to curate bespoke travel experiences
              that exceed your expectations.
            </li>
            <li>
              <strong>Transparency:</strong> We believe in transparency and
              honesty in all our dealings. From pricing and itinerary details to
              terms and conditions, you can trust us to provide clear and
              upfront information every step of the way.
            </li>
            <li>
              <strong>24/7 Support:</strong> Your safety and comfort are our top
              priorities. That’s why our dedicated support team is available
              around the clock to assist you with any queries or concerns you
              may have before, during, or after your trip.
            </li>
          </ul>
        </div>
        <Image
          src="/about3.png"
          width={700}
          height={450}
          alt="Why Choose Us"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="bg-teal-700 text-white rounded-3xl p-12 text-center shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-4">Join Us on the Journey</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Whether you are embarking on a solo adventure, planning a romantic
          getaway, or organizing a group tour with friends and family, Admire
          Holidays is here to make your travel dreams come true. Join us on the
          journey of a lifetime and let us help you explore the wonders of our
          world, one unforgettable experience at a time.
        </p>
        <button
          onClick={handleFormToggle}
          className="bg-amber-400 text-teal-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-md"
        >
          Book Your Trip
        </button>
      </motion.div>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeForm}
        >
          <div
            className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
              onClick={closeForm}
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">
              Enquire Now
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg w-full"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
