"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const states = [
  { name: "Andhra Pradesh", icon: "/icons/andhra.png" },
  { name: "Arunachal Pradesh", icon: "/icons/arunachal.png" },
  { name: "Assam", icon: "/icons/assam.png" },
  { name: "Bihar", icon: "/icons/bihar.png" },
  { name: "Chhattisgarh", icon: "/icons/chhattisgarh.png" },
  { name: "Goa", icon: "/icons/goa.png" },
  { name: "Gujarat", icon: "/icons/gujarat.png" },
  { name: "Haryana", icon: "/icons/haryana.png" },
  { name: "Himachal Pradesh", icon: "/icons/himachal.png" },
  { name: "Jharkhand", icon: "/icons/jharkhand.png" },
  { name: "Karnataka", icon: "/icons/karnataka.png" },
  { name: "Kerala", icon: "/icons/kerala.png" },
  { name: "Madhya Pradesh", icon: "/icons/madhyapradesh.png" },
  { name: "Maharashtra", icon: "/icons/maharashtra.png" },
  { name: "Manipur", icon: "/icons/manipur.png" },
  { name: "Meghalaya", icon: "/icons/meghalaya.png" },
  { name: "Mizoram", icon: "/icons/mizoram.png" },
  { name: "Nagaland", icon: "/icons/nagaland.png" },
  { name: "Odisha", icon: "/icons/odisha.png" },
  { name: "Punjab", icon: "/icons/punjab.png" },
  { name: "Rajasthan", icon: "/icons/rajasthan.png" },
  { name: "Sikkim", icon: "/icons/sikkim.png" },
  { name: "Tamil Nadu", icon: "/icons/tamilnadu.png" },
  { name: "Telangana", icon: "/icons/telangana.png" },
  { name: "Tripura", icon: "/icons/tripura.png" },
  { name: "Uttar Pradesh", icon: "/icons/uttarpradesh.png" },
  { name: "Uttarakhand", icon: "/icons/uttarakhand.png" },
  { name: "West Bengal", icon: "/icons/westbengal.png" },
];

export default function DomesticDestinations() {
  const router = useRouter();

  const handleStateClick = (stateName) => {
    const formattedStateName = stateName.replace(/\s+/g, "-").toLowerCase();
    router.push(`/states/${formattedStateName}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/india-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover Indias States
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a State
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {states.map((state, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => handleStateClick(state.name)}
            >
              <Image
                src={state.icon}
                alt={state.name}
                width={96}
                height={96}
                className="mb-3 transition-transform transform group-hover:scale-110"
              />
              <Link href={`/states/${state.name.replace(/\s+/g, "-").toLowerCase()}`}>
                <p className="text-lg font-semibold text-gray-800 hover:underline">
                  {state.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
