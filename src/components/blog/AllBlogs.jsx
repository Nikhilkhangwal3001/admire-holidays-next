import blogPagedata from "@/data/blogPageData";
import React from "react";
import BlogPageCard2 from "../cards/BlogPageCard2";
import BlogHeader from "./BlogHeader";
const AllBlogs = () => {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-center pb-5 font-bold text-2xl sm:text-4xl">
          {" "}
          Latest Blog Post
        </h1>
        <div className="grid max-w-7xl  px-10 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mx-auto my-10">
          {blogPagedata.map((item, i) => (
            <BlogPageCard2
              link={item.link}
              key={i}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
