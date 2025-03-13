import { notFound } from "next/navigation";
import Image from "next/image";
import conf from "../../../../conf/conf";

async function getPackageData(slug) {
  const res = await fetch(`${conf.laravelBaseUrl}/public-itinerary/${slug}`, {
    cache: "no-store", // Ensures fresh data every request
  });

  if (!res.ok) {
    return null; // Handle 404 scenario
  }

  return res.json();
}

export default async function PackageDetail({ params }) {
  const { slug } = params;
  const packageData = await getPackageData(slug);

  if (!packageData) {
    return notFound(); // Shows 404 page if package not found
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{packageData.title}</h1>
      <Image
        src={conf.laravelBaseUrl+ "/" + packageData.destination_thumbnail}
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
    </div>
  );
}
