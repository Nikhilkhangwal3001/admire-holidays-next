import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import AdditionalLinks from "@/components/productCategory/AdditionalLinks";
import Link from "next/link";
export const getProductsData = async ({ params }) => {
  const response = await fetch(
    `https://server-deploy-gamma.vercel.app/${params.category}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    // Handle the case where the response is not OK (e.g., status code other than 200)
    console.error(`Error fetching data. Status: ${response.status}`);
    return [];
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    // Handle the case where the response is not in JSON format
    console.error("Response is not in JSON format");
    return [];
  }

  const productsData = await response.json();
  return productsData.data;
};

const Page = async ({ params }) => {
  const data = await getProductsData({ params });
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Navbar />
      <PageBanner
        heading={`Destination: ${params.category}`}
        text={`Home > India > ${params.category}`}
      />

      <div className="max-w-7xl mx-auto my-20 px-5 flex flex-col gap-10">
        <div className="grid lg:grid-cols-4 justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {data.map((destination, index) => (
            <div key={index}>
              <ProductCategoryCard
                url={destination.imageUrl}
                days={destination.duration}
                destination={destination.heading}
                productLink={`/packages/${params.category}/${index}`}
              />
            </div>
          ))}
        </div>
        <AdditionalLinks category={params.category} />
        {/* {additionalLinks} */}
        <ContactUsForm />
        <Footer />
      </div>
    </>
  );
};

export default Page;
