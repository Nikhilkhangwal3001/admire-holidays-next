import homePageBlogData from "@/data/blogSectionHomepage";
import React from "react";
import HomePageBlogCard from "../cards/HomePageBlogCard";

const HomePageBlogSection = () => {
  return (
    <section className="mt-32 bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#00BB98] text-lg font-semibold tracking-wide uppercase">
          Travel Tips & Advice
        </p>
        <h1 className="text-gray-900 md:text-5xl text-3xl font-extrabold leading-tight mt-2">
          Explore Smart Travel Tips & Guides
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Get the best travel tips, hacks, and advice to make your journey smooth and enjoyable.
        </p>
      </div>

      <div className="grid max-w-7xl mx-auto mt-12 gap-6 px-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {homePageBlogData.map((item, i) => (
          <HomePageBlogCard
            link={item.link}
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePageBlogSection;
