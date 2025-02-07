import homePageBlogData from "@/data/blogSectionHomepage";
import React from "react";
import HomePageBlogCard from "../cards/HomePageBlogCard";

const HomePageBlogSection = () => {
  return (
    <section className="mt-32">
      <p class="text-[#00BB98] my-3 text-center text-xl  font-LaBelle  ">
        Travel Tips and Advice
      </p>
      <h1 className="text-center md:text-5xl text-3xl  font-bold">
        Travel Tips and Advice
      </h1>
      <div className="grid max-w-7xl px-10 lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 mx-auto my-20">
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
