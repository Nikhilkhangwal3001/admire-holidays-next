"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DomesticDestinations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/india-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover India's States
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a State
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Andhra Pradesh */}
          <div className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer">
            <img
              src="/icons/andhra.png"
              alt="Andhra Pradesh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/state/andhrapradesh">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Andhra Pradesh
              </p>
            </Link>
          </div>

          {/* Arunachal Pradesh */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("arunachal-pradesh")}
          >
            <img
              src="/icons/arunachal.png"
              alt="Arunachal Pradesh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/arunachal-pradesh">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Arunachal Pradesh
              </p>
            </Link>
          </div>

          {/* Assam */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("assam")}
          >
            <img
              src="/icons/assam.png"
              alt="Assam"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/assam">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Assam
              </p>
            </Link>
          </div>

          {/* Bihar */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("bihar")}
          >
            <img
              src="/icons/bihar.png"
              alt="Bihar"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/bihar">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Bihar
              </p>
            </Link>
          </div>

          

          {/* Continue this pattern for all other states */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
