"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 space-y-16  text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center text-white text-center overflow-hidden rounded-xl shadow-xl">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover ">
          <source src="/Admire1.mp4" type="video/mp4" />
        </video>
        {/* <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Admire Holidays
        </h1> */}
      </div>

      {/* About Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-red-600">Admire Holidays</h2>
        <p className="max-w-3xl mx-auto text-lg text-yellow-600">
          Admire Holidays is one of the best and most trusted travel companies in all of India.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image src="/travel1.jpg" width={800} height={500} alt="How Did Admire Holidays Start?" className="rounded-xl shadow-lg" />
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-red-600">How Did Admire Holidays Start?</h2>
          <p className="text-lg text-yellow-600">
            Admire Holidays began in 2015, and today, we have over 100 happy clients who are still closely connected with our company.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600">Our Mission</h2>
          <p className="text-lg text-yellow-600">Our mission is to make your travels affordable and unforgettable, ensuring that every trip with us is special.</p>
        </div>
        <Image src="/mission.jpeg" width={500} height={350} alt="Mission" className="rounded-xl shadow-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
        <Image src="/vision.png" width={500} height={350} alt="Vision" className="rounded-xl shadow-lg" />
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600">Our Vision</h2>
          <p className="text-lg text-yellow-600">We aim to make every moment of your trip enjoyable and memorable, so your travel experiences are filled with happiness and joy.</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-red-600">Why Choose Us</h2>
          <p className="text-lg text-yellow-600"><strong>True Travel Experience:</strong> We don’t just plan destinations; we plan complete experiences for you to enjoy.</p>
          <p className="text-lg text-yellow-600"><strong>Your Trusted Guide:</strong> We are here to answer all your questions and solve any concerns.</p>
          <p className="text-lg text-yellow-600"><strong>Your Budget, Our Priority:</strong> We promise high-quality travel experiences that are also affordable.</p>
          <p className="text-lg text-yellow-600"><strong>Safety First:</strong> Your safety is our top priority.</p>
        </div>
        <Image src="/travel3.jpg" width={800} height={500} alt="Why Choose Us" className="rounded-xl shadow-lg" />
      </div>

      {/* Team Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-red-600">Our Team</h2>
        <p className="max-w-3xl mx-auto text-lg text-yellow-600">Our expert travel team understands your needs and ensures every trip is perfect.</p>
      </div>

      {/* Support Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-red-600">Always with You</h2>
          <p className="text-lg text-yellow-600">With us, you will never have to worry about travel troubles. We are always here for you!</p>
          <p className="text-lg text-yellow-600"><strong>Customer Satisfaction:</strong> Seeing you smile is our greatest reward.</p>
          <p className="text-lg text-yellow-600"><strong>24/7 Support:</strong> Our travel experts are always available to help you.</p>
        </div>
        <Image src="/support.jpg" width={800} height={500} alt="Support" className="rounded-xl shadow-lg" />
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-red-600 text-white rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold">Join Our Family</h2>
        <p className="mt-4 text-lg">Plan your next trip with us and see how we make your journey even more special.</p>
        <a href="tel:1800-121-4252"><button className="mt-6 px-8 py-4 bg-white text-red-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Book Your Trip
        </button></a>
      </div>
    </section>
  );
};

export default AboutUs;
