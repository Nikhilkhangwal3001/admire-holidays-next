import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AllBlogs from "@/components/blog/AllBlogs";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AllBlogs />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
};

export default page;
