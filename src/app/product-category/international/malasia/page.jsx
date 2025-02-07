import EmptyProductCategory from "@/components/EmptyProductCategory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import React from "react";
const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        heading={"Catergory : Malasia"}
        text={"Home > India > Malasia"}
      />
      <EmptyProductCategory />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Category | Malasia",
  };
}
