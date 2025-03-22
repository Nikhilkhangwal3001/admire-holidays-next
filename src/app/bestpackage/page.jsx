"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import Link from "next/link";

const states = [
  { name: "Andhra Pradesh", icon: "/icons/andhra.png", video: "/videos/andhra.mp4" },
  { name: "Arunachal Pradesh", icon: "/icons/arunachal.png", video: "/videos/arunachal.mp4" },
  { name: "Assam", icon: "/icons/assam.png", video: "/videos/assam.mp4" },
  { name: "Bihar", icon: "/icons/bihar.png", video: "/videos/bihar.mp4" },
  { name: "Chhattisgarh", icon: "/icons/chhattisgarh.png", video: "/videos/chhattisgarh.mp4" },
  { name: "Goa", icon: "/icons/goa.png", video: "/videos/goa.mp4" },
  { name: "Gujarat", icon: "/icons/gujarat.png", video: "/videos/gujarat.mp4" },
  { name: "Haryana", icon: "/icons/haryana.png", video: "/videos/haryana.mp4" },
  { name: "Himachal Pradesh", icon: "/icons/himachal.png", video: "/videos/himachal.mp4" },
  { name: "Jharkhand", icon: "/icons/jharkhand.png", video: "/videos/jharkhand.mp4" },
  { name: "Karnataka", icon: "/icons/karnataka.png", video: "/videos/karnataka.mp4" },
  { name: "Kerala", icon: "/icons/kerala.png", video: "/videos/kerala.mp4" },
  { name: "Madhya Pradesh", icon: "/icons/madhyapradesh.png", video: "/videos/madhyapradesh.mp4" },
  { name: "Maharashtra", icon: "/icons/maharashtra.png", video: "/videos/maharashtra.mp4" },
  { name: "Manipur", icon: "/icons/manipur.png", video: "/videos/manipur.mp4" },
  { name: "Meghalaya", icon: "/icons/meghalaya.png", video: "/videos/meghalaya.mp4" },
  { name: "Mizoram", icon: "/icons/mizoram.png", video: "/videos/mizoram.mp4" },
  { name: "Nagaland", icon: "/icons/nagaland.png", video: "/videos/nagaland.mp4" },
  { name: "Odisha", icon: "/icons/odisha.png", video: "/videos/odisha.mp4" },
  { name: "Punjab", icon: "/icons/punjab.png", video: "/videos/punjab.mp4" },
  { name: "Rajasthan", icon: "/icons/rajasthan.png", video: "/videos/rajasthan.mp4" },
  { name: "Sikkim", icon: "/icons/sikkim.png", video: "/videos/sikkim.mp4" },
  { name: "Tamil Nadu", icon: "/icons/tamilnadu.png", video: "/videos/tamilnadu.mp4" },
  { name: "Telangana", icon: "/icons/telangana.png", video: "/videos/telangana.mp4" },
  { name: "Tripura", icon: "/icons/tripura.png", video: "/videos/tripura.mp4" },
  { name: "Uttar Pradesh", icon: "/icons/uttarpradesh.png", video: "/videos/uttarpradesh.mp4" },
  { name: "Uttarakhand", icon: "/icons/uttarakhand.png", video: "/videos/uttarakhand.mp4" },
  { name: "West Bengal", icon: "/icons/westbengal.png", video: "/videos/westbengal.mp4" },
];

export default function DomesticDestinations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/india-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">Discover India's States</h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Select a State to Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {states.map((state, index) => (
            <div key={index} className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all">
              <img src={state.icon} alt={state.name} className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110" />
              <Link href={`/state/${state.name.replace(/\s+/g, "-").toLowerCase()}`}>
                <p className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">{state.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
