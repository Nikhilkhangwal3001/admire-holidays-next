"use client";
import blogPagedata from "@/data/blogPageData";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import BlogPageCard from "../cards/BlogPageCard";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import Link from "next/link";

const BlogLayout = ({ params }) => {
  const [result, setResult] = useState("Subscribe");
  const [formValid, setFormValid] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const post = blogPagedata.find((post) => post.slug === params.slug);
  const getShareUrl = (platform) => {
    if (!params || !params.slug) {
      return ""; // Return an empty string if params is undefined or missing the slug
    }

    const url = `https://admire-holidays-s5lv.vercel.app/blog/${params.slug}`;
    const text = encodeURIComponent(post.title);

    switch (platform) {
      case "whatsapp":
        return `https://wa.me/?text=${text}%20${url}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      default:
        return "";
    }
  };

  // If no matching post is found, you can handle it accordingly
  if (!post) {
    return <div>Blog post not found</div>;
  }

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Subscribing....");
    const formData = new FormData(event.target);

    if (!formData.get("mail")) {
      setFormValid(false);
      setResult("Please enter your email");
      return;
    }

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed");
      event.target.reset();
      setFormValid(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section>
      <div className="max-w-7xl pt-20  flex items-center justify-center mx-auto px-5 my-20">
        <div className="flex w-full md:flex-row flex-col justify-between gap-10 ">
          <div className=" md:w-[70%] w-full flex flex-col gap-20 ">
            <BlogPageCard
              imageUrl={post.imageUrl}
              title={post.title}
              detail={post.detail}
              comment={post.comment}
              date={post.date}
              author={post.author}
              imageUrl1={post.imageUrl1}
              imageUrl2={post.imageUrl2}
              content={post.content}
            />
          </div>
          <div className="md:w-[30%] w-full flex flex-col gap-5">
            <div className="flex sm:gap-4 mt-5 gap-2 items-center lg:justify-center ">
              <div className="flex gap-2 items-center sm:text-base text-sm justify-center">
                Share Blog <IoIosShareAlt size={20} />
              </div>
              <div className="flex items-center justify-center sm:gap-4 gap-1 rounded-xl">
                <a
                  href={getShareUrl("whatsapp", post, params)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp
                    size={30}
                    className="cursor-pointer"
                    color="#25D366"
                  />
                </a>
                <a
                  href={getShareUrl("facebook", post, params)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    color=" #1877F2"
                    size={30}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href={getShareUrl("twitter", post, params)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={30}
                    color="#1DA1F2"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
            {/* <div className="flex items-center relative min-w-[100%] ">
              <input
                type="text"
                placeholder="search..."
                className="min-w-[100%] rounded-xl  p-3 border-[1px] border-gray-300"
              />
              <CiSearch
                size={40}
                className="absolute cursor-pointer right-2"
                color="gray"
              />
            </div> */}

            <div className="flex flex-col gap-5 h-fit  text-white bg-[#1A1A3D;] justify-center items-center  px-4  py-6 rounded-xl ">
              <h1 className="font-semibold text-xl">
                GET THE LATEST NEWS, UPDATES AND LATEST OFFERS
              </h1>
              <form
                onSubmit={submitForm}
                className="flex flex-col gap-5 items-center w-full justify-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="mail"
                  className={`min-w-[100%] rounded-xl text-black p-3 border-[1px] bg-white ${
                    !formValid && "border-red-500"
                  }`}
                />
                {!formValid && (
                  <p className="text-red-500">Please enter a valid email</p>
                )}
                <button className="w-full h-12 rounded-xl bg-[#ef4444]">
                  {result}
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
              <h5 className="text-lg font-medium">Popular Tags</h5>
              <hr />
              <div className="flex flex-col  gap-5">
                <div className="flex  gap-2">
                  <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                    Backpacking Clothes
                  </div>
                  <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                    Place
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                    Story
                  </div>
                  <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                    Travel
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col  gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
              <h5 className="text-lg font-medium"> See Our Recent Post</h5>
              <hr />
              <div className="flex flex-col gap-5 transition-all duration-300">
                {blogPagedata
                  .slice(0, showAll ? blogPagedata.length : 4)
                  .map((item, i) => (
                    <Link
                      key={i}
                      href={item.slug}
                      className="font-light text-blue-800 underline text-base"
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
              {blogPagedata.length > 4 && (
                <button
                  className=" bg-[#3b2d5a] text-white  py-2 px-4 rounded"
                  onClick={toggleShowAll}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
