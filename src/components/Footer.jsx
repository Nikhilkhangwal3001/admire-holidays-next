"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaFacebook, FaSquareXTwitter, FaLinkedin, FaSquareInstagram, FaYoutube, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <footer className=" text-white  py-10 px-5 md:px-20 border border-4xl m-4 rounded-md border-yellow-600">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-around border-b border-gray-700 pb-6">
          {/* Left Side: Logo & Content */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Link href="/">
              <Image src="/logo.jpg" width={220} height={220} alt="Logo" className="rounded-full cursor-pointer" />
            </Link>
            <p className="mt-4 text-sm text-black">Admire Holidays helps you explore the world with seamless travel. We’ve been in business for 10 years.</p>
          </div>

          {/* Right Side: Headings & Points */}
          <div className="md:w-2/3 text-right">
            <h3 className="text-2xl text-red-600 font-bold">Quick Links</h3>
            <ul className="flex justify-end gap-6 text-sm text-gray-600 mt-2">
              <Link href="/" className="hover:underline cursor-pointer">Home</Link>
              <Link href="/about" className="hover:underline cursor-pointer">About</Link>
              <Link href="/services" className="hover:underline cursor-pointer">Services</Link>
              <Link href="/blog" className="hover:underline cursor-pointer">Blog</Link>
              <Link href="/contact" className="hover:underline cursor-pointer">Contact</Link>
            </ul>
            
            <h3 className="text-2xl text-red-600 font-bold mt-4">Trending Destinations</h3>
            <ul className="flex justify-end gap-6 text-sm text-gray-600 mt-2">
              <Link href="/packages/dubai" className="hover:underline cursor-pointer">Dubai</Link>
              <Link href="/packages/bali" className="hover:underline cursor-pointer">Bali</Link>
              <Link href="/packages/kerala" className="hover:underline cursor-pointer">Kerala</Link>
              <Link href="/packages/ladakh" className="hover:underline cursor-pointer">Ladakh</Link>
              <Link href="/packages/thailand" className="hover:underline cursor-pointer">Thailand</Link>
            </ul>
          </div>
        </div>

        {/* Second Row: Contact Section */}
        <h3 className="text-2xl font-bold mb-4 text-red-600 text-center  md:mb-0">Contact Us</h3>
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 py-6 text-sm text-gray-400">
         
          <div className="flex flex-col md:flex-row md:gap-12 gap-6 m-auto">
            <div className="flex items-center gap-2">
              <IoCallOutline size={20} color="#FD4A4C" />
              <a href="tel:18001214252" className="hover:underline text-black">1800-121-4252</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot size={20} className="text-red-500" />
              <span className="text-black">34, Sewak Park, Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059</span>
            </div>
            <div className="flex gap-4 text-xl">
              <a href="https://m.facebook.com/p/Admire-Holidays-100090809996697/" target="_blank" rel="noopener noreferrer">
                <FaFacebook color="#1877F2" size={25} className="cursor-pointer" />
              </a>
              <a href="https://twitter.com/HolidaysAd53932" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter size={25} color="#14171A" className="cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/admire-holidays-272a06272/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={25} color="#0077b5" className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/admireholidays_official?igsh=MTBhNnU4MWI5Njdjeg==" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram size={25} color="#4c68d7" className="cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@AdmireHolidays_official" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={25} color="#FF0000" className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Third Row: Copyright & Privacy */}
        <div className="flex justify-between items-center text-sm text-gray-500 pt-6">
          <p className="text-center w-full text-black">&copy; 2025 Admire Holidays. All rights reserved.</p>
          <div>
            <Link href="/privacy-policy" className="hover:text-white text-black">Privacy</Link>
            <span className="mx-2">|</span>
            <Link href="/credit" className="hover:text-white text-black">Credits</Link>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
