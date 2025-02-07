import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import TourismAlliance from "@/components/homePageComponents/TourismAlliance";
import QueryForm from "@/components/queryForm/QueryForm";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <QueryForm />
      <TourismAlliance />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
};

export default page;
