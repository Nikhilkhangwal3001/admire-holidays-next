"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(
          "https://admiredashboard.theholistay.in/public-trending-destinations-images"
        );
        setDestinations(data);
      } catch (err) {
        setError("Failed to load destinations.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Domestic", href: "/allstate" },
    { name: "International", href: "/internationalpackages" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-black text-white py-10 px-5 md:px-20"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md -z-10"></div>

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
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Trending Destinations */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Trending Destinations</h3>
          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {destinations.length > 0 ? (
                destinations.map((dest, i) => (
                  <li key={i}>
                    <Link href="">
                      <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-default">
                        {dest.destination}
                      </span>
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No destinations available.</p>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Contact Information */}
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
      </div>

      {/* Footer Bottom */}
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
            Term & Conditions
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
