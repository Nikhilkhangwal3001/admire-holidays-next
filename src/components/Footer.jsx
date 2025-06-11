"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const [trending, setTrending] = useState([]);
  const [domestic, setDomestic] = useState([]);
  const [international, setInternational] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllDestinations() {
      try {
        const [trendingRes, domesticRes, internationalRes] = await Promise.all([
          axios.get("https://admiredashboard.theholistay.in/public-trending-destinations-images"),
          axios.get("https://admiredashboard.theholistay.in/public-domestic-destinations-images"),
          axios.get("https://admiredashboard.theholistay.in/public-international-destinations-images"),
        ]);

        setTrending(trendingRes.data.slice(0, 8));
        setDomestic(domesticRes.data.slice(0, 8));
        setInternational(internationalRes.data.slice(0, 8));
      } catch (err) {
        setError("Failed to load destinations.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllDestinations();
  }, []);

  const links = [
    { name: "Home", href: "/" },
    // { name: "Domestic", href: "/allstate" },
    // { name: "International", href: "/internationalpackages" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const renderList = (items, type) => {
    if (loading) return <p className="text-gray-400">Loading...</p>;
    if (error) return <p className="text-red-400">{error}</p>;

    return (
      <ul className="mt-3 space-y-2">
        {items.length > 0 ? (
          items.map((dest, i) => (
            <li key={i}>
              <Link href={`/${type}/${dest.destination}`}>
                <span className="text-gray-400 capitalize cursor-pointer hover:text-white transition-all duration-300">
                  {dest.destination.charAt(0).toUpperCase() + dest.destination.slice(1).toLowerCase()}
                </span>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No data available.</p>
        )}
      </ul>
    );
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-black text-white py-10 px-5 md:px-20"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md -z-10"></div>

      {/* 5 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-gray-700 pb-6">
        {/* Logo + About */}
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

        {/* Quick Links */}
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

        {/* Trending */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Trending</h3>
          {renderList(trending, "trending-destination")}
        </div>

        {/* Domestic */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Domestic</h3>
          {renderList(domestic, "trending-destination")}
        </div>

        {/* International */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">International</h3>
          {renderList(international, "trending-destination")}
        </div>
      </div>

      {/* Contact Info */}
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
