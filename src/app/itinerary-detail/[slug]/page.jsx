"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import conf from "../../../../conf/conf";
import PackageOptionQuote from "@/components/product/PackageOptionQuote";

async function getPackageData(slug) {
  try {
    const res = await fetch(`${conf.laravelBaseUrl}/public-itinerary/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching package data:", error);
    return null;
  }
}

export default function PackageDetail({ params }) {
  const { slug } = params;
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPackageData(slug);
      setPackageData(data);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!packageData) return notFound();

  return (
    <section>
      <div className="max-w-12xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{packageData.title}</h1>
        <Image
          src={conf.laravelBaseUrl + "/" + packageData.destination_thumbnail}
          alt={packageData.title}
          width={800}
          height={400}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">{packageData.destination_detail}</p>

        <h2 className="text-2xl font-semibold mt-6">Inclusions</h2>
        <p className="text-gray-600">{packageData.inclusion || "Not specified"}</p>

        <h2 className="text-2xl font-semibold mt-6">Pricing</h2>
        <p className="text-gray-600 font-semibold">{packageData.pricing || "Contact for details"}</p>

        <h2 className="text-2xl font-semibold mt-6">Duration</h2>
        <p className="text-gray-600">{packageData.duration}</p>

        <h2 className="text-2xl font-semibold mt-6">Selected Destination</h2>
        <p className="text-gray-600">{packageData.selected_destination}</p>
      <PackageOptionQuote/>
      </div>
    
    </section>
  );
}
