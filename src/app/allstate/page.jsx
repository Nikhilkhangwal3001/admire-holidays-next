"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { images } from "../../../next.config";
export default function DomesticDestinations() {
  const [loading, setLoading] = useState(true);
  const [andhraImage, setAndhraImage] = useState("");
  const [arunachalImage, setArunachalImage] = useState("");
  const [assamImage, setAssamImage] = useState("");
  const [biharImage, setBiharImage] = useState("");
  const [chhattisgarhImage, setChhattisgarhImage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchAndhra = await fetch(
          "https://admiredashboard.theholistay.in/public-destination-images/andhra-pradesh"
        );
        const andhraData = await fetchAndhra.json();
        
        // Assuming 'imageUrl' is the key in the andhraData object
        const imageUrl = andhraData.images; // Modify this if the key is different
        console.log( andhraData.images);
        // Log the image URL to the console
        console.log(`Image URL: https://admiredashboard.theholistay.in/${imageUrl}`);
        
        // Set the full image URL
        setAndhraImage(`https://admiredashboard.theholistay.in/${imageUrl}`);
        
        const fetchArunachal = await fetch(
          "http://admiredashboard.theholistay.in/public-destination-images/arunachal"
        );
        const arunachalData = await fetchArunachal.json();
        setArunachalImage(arunachalData.imageUrl);

        const fetchAssam = await fetch(
          "http://admiredashboard.theholistay.in/public-destination-images/assam"
        );
        const assamData = await fetchAssam.json();
        setAssamImage(assamData.imageUrl);

        const fetchBihar = await fetch(
          "http://admiredashboard.theholistay.in/public-destination-images/bihar"
        );
        const biharData = await fetchBihar.json();
        setBiharImage(biharData.imageUrl);

        const fetchChhattisgarh = await fetch(
          "http://admiredashboard.theholistay.in/public-destination-images/chhattisgarh"
        );
        const chhattisgarhData = await fetchChhattisgarh.json();
        setChhattisgarhImage(chhattisgarhData.imageUrl);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/domesticvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
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
              src={images}
              alt="Andhra Pradesh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/andhrapardesh">
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
            <Link href="/states/arunachalpardesh">
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

          {/* Chhattisgarh */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("chhattisgarh")}
          >
            <img
              src="/icons/chhattisgarh.png"
              alt="Chhattisgarh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/chhattisgarh">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Chhattisgarh
              </p>
            </Link>
          </div>

          {/* Goa */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("goa")}
          >
            <img
              src="/icons/goa.png"
              alt="Goa"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/goa">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Goa
              </p>
            </Link>
          </div>

          {/* Gujarat */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("gujarat")}
          >
            <img
              src="/icons/gujarat.png"
              alt="Gujarat"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/gujarat">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Gujarat
              </p>
            </Link>
          </div>

          {/* Haryana */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("haryana")}
          >
            <img
              src="/icons/haryana.png"
              alt="Haryana"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/haryana">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Haryana
              </p>
            </Link>
          </div>

          {/* Himachal Pradesh */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("himachal-pradesh")}
          >
            <img
              src="/icons/himachal.png"
              alt="Himachal Pradesh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/himachal-pradesh">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Himachal Pradesh
              </p>
            </Link>
          </div>

          {/* Jharkhand */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("jharkhand")}
          >
            <img
              src="/icons/jharkhand.png"
              alt="Jharkhand"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/jharkhand">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Jharkhand
              </p>
            </Link>
          </div>

          {/* Karnataka */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("karnataka")}
          >
            <img
              src="/icons/karnataka.png"
              alt="Karnataka"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/karnataka">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Karnataka
              </p>
            </Link>
          </div>

          {/* Kerala */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("kerala")}
          >
            <img
              src="/icons/kerala.png"
              alt="Kerala"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/kerala">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Kerala
              </p>
            </Link>
          </div>

          {/* Madhya Pradesh */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("madhya-pradesh")}
          >
            <img
              src="/icons/madhya-pradesh.png"
              alt="Madhya Pradesh"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/madhya-pradesh">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Madhya Pradesh
              </p>
            </Link>
          </div>

          {/* Maharashtra */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("maharashtra")}
          >
            <img
              src="/icons/maharashtra.png"
              alt="Maharashtra"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/maharashtra">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Maharashtra
              </p>
            </Link>
          </div>

          {/* Manipur */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("manipur")}
          >
            <img
              src="/icons/manipur.png"
              alt="Manipur"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/manipur">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Manipur
              </p>
            </Link>
          </div>

          {/* Meghalaya */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("meghalaya")}
          >
            <img
              src="/icons/meghalaya.png"
              alt="Meghalaya"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/meghalaya">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Meghalaya
              </p>
            </Link>
          </div>

          {/* Mizoram */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("mizoram")}
          >
            <img
              src="/icons/mizoram.png"
              alt="Mizoram"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/mizoram">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Mizoram
              </p>
            </Link>
          </div>

          {/* Nagaland */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("nagaland")}
          >
            <img
              src="/icons/nagaland.png"
              alt="Nagaland"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/nagaland">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Nagaland
              </p>
            </Link>
          </div>

          {/* Odisha */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("odisha")}
          >
            <img
              src="/icons/odisha.png"
              alt="Odisha"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/odisha">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Odisha
              </p>
            </Link>
          </div>

          {/* Punjab */}
          <div
            className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => handleStateClick("punjab")}
          >
            <img
              src="/icons/punjab.png"
              alt="Punjab"
              className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
            />
            <Link href="/states/punjab">
              <p className="text-lg font-semibold text-gray-800 hover:underline">
                Punjab
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
