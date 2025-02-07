import CompanyStatsSection from "@/components/homePageComponents/CompanyStatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/homePageComponents/Testimonial";
import ContactUsBanner from "@/components/PageBanner";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import React from "react";
import PageBanner from "@/components/PageBanner";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner heading={"Contact us"} text={"Home - Contact us"} />
      <ContactUsForm />
      <CompanyStatsSection />
      <Testimonial />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </main>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Contact",
  };
}
