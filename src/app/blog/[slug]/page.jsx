// app/blog/[slug]/page.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogLayout from "@/components/blog/BlogLayout";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import blogPagedata from "@/data/blogPageData";
import { notFound } from "next/navigation";

export default function BlogPost({ params }) {
  const post = blogPagedata.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div>
        <Navbar />
        <BlogLayout params={params} />
        <HomePageBlogSection />
        <SubscribeLetter />
        <Footer />
      </div>
    </div>
  );
}

export function generateMetadata({ param }) {
  return {
    title: "Blog",
  };
}
