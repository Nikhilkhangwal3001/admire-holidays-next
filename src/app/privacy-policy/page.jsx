import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner heading={"Privacy Policy"} text={"Home - Privacy Policy"} />
      <PrivacyPolicy />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Privacy Policy",
  };
}
