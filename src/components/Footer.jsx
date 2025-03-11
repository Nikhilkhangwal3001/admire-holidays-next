"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-black text-white py-10 px-5 md:px-20"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md -z-10"></div>

      {/* First Row */}
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-6">
        {/* Left Side: Logo & Description */}
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/Admirelogo.png"
              width={180}
              height={180}
              alt="Logo"
              className="rounded-full cursor-pointer shadow-md"
            />
          </Link>
          <p className="text-sm text-gray-300">
            Admire Holidays helps you explore the world with seamless travel.
            <br />
            <span className="text-yellow-400">10+ years of expertise!</span>
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "About", "Services", "Blog", "Contact"].map((link, i) => (
              <li key={i}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Trending Destinations */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">
            Trending Destinations
          </h3>
          <ul className="mt-3 space-y-2">
            {["Dubai", "Bali", "Kerala", "Ladakh", "Thailand"].map((dest, i) => (
              <li key={i}>
                <Link
                  href={`/packages/${dest.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  {dest}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Row: Contact Information */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-6 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-2">
            <IoCallOutline size={20} className="text-yellow-400" />
            <a href="tel:18001214252" className="hover:text-white">
              1800-121-4252
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot size={20} className="text-yellow-400" />
            <span>
              34, Sewak Park, Dwarka More Metro, Near Pillar No-772, New Delhi
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            { icon: FaFacebook, link: "https://m.facebook.com/p/Admire-Holidays-100090809996697/", color: "#1877F2" },
            { icon: FaSquareXTwitter, link: "https://twitter.com/HolidaysAd53932", color: "#14171A" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/admire-holidays-272a06272/", color: "#0077b5" },
            { icon: FaSquareInstagram, link: "https://www.instagram.com/admireholidays_official", color: "#C13584" },
            { icon: FaYoutube, link: "https://www.youtube.com/@AdmireHolidays_official", color: "#FF0000" },
          ].map(({ icon: Icon, link, color }, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
              <Icon
                size={25}
                className="cursor-pointer transition-transform transform hover:scale-125"
                style={{ color }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Third Row: Copyright & Privacy */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 pt-6 text-sm">
        <p className="text-center w-full md:w-auto">
          &copy; 2025 Admire Holidays. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/credit" className="hover:text-white">
            Credits
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
