"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaFacebook, FaSquareXTwitter, FaLinkedin, FaSquareInstagram, FaYoutube,FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const iconSize = 35; // Consistent icon size

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <footer className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0 mt-36 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex flex-col gap-5 sm:items-start items-center justify-center">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border-4 border-[#CF1E27] shadow-xl shadow-gray-300">
            <Image src="/logo.jpg" width={120} height={120} alt="Logo" className="rounded-full" />
          </div>
          <p className="text-center sm:text-left">
            Admire Holidays helps you explore the world with seamless travel. We’ve been in business for 7 years. Contact us for a stress-free vacation.
          </p>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-5 items-center">
          <h5 className="font-semibold">About</h5>
          <ul className="font-light flex flex-col gap-4">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/credit">Credit</Link>
          </ul>
        </div>

        {/* Trending Destinations */}
        <div className="flex flex-col gap-5 items-center">
          <h5 className="font-semibold">Trending</h5>
          <ul className="font-light flex flex-col gap-4">
            <Link href="/packages/dubai">Dubai</Link>
            <Link href="/packages/bali">Bali</Link>
            <Link href="/packages/kerala">Kerala</Link>
            <Link href="/packages/ladakh">Ladakh</Link>
            <Link href="/packages/thailand">Thailand</Link>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-5 sm:items-start items-center">
          <h5 className="font-semibold">Contact Us</h5>
          <ul className="font-light flex flex-col gap-4">
            <li className="flex gap-4 items-center">
              <IoCallOutline color="#FD4A4C" size={iconSize} /> 1800-121-4252
            </li>
            <li className="flex gap-4 items-center">
              <MdOutlineMessage color="#FD4A4C" size={iconSize} /> info@admireholidays.com
            </li>
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-red-500" size={iconSize} />
              <span>
                34, Sewak Park (1st floor), Dwarka More Metro, Near Metro Pillar
                No-772, New Delhi - 110059
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex items-center mt-8 gap-4">
            <a href="https://m.facebook.com/p/Admire-Holidays-100090809996697/" target="_blank" rel="noopener noreferrer">
              <FaFacebook color="#1877F2" size={iconSize} className="cursor-pointer" />
            </a>
            <a href="https://twitter.com/HolidaysAd53932" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={iconSize} color="#14171A" className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/admire-holidays-272a06272/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={iconSize} color="#0077b5" className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/admireholidays_official?igsh=MTBhNnU4MWI5Njdjeg==" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram size={iconSize} color="#4c68d7" className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@AdmireHolidays_official" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={iconSize} color="#FF0000" className="cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <p className="text-center py-10">© 2025 Admire Holidays, All Rights Reserved.</p>
    </motion.div>
  );
};

export default Footer;
