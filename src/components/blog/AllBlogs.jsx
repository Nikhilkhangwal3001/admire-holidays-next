"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://admiredashboard.theholistay.in/public-blogs")
      .then((response) => {
        const sortedBlogs = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setBlogs(sortedBlogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  const handleShare = (blogId) => {
    const blogUrl = `https://yourwebsite.com/blog/${blogId}`;
    navigator.clipboard.writeText(blogUrl);
    alert("Blog link copied to clipboard!");
  };

  if (loading)
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 text-xl">{error}</p>;

  return (
    <section>
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center bg-black overflow-hidden">
        <div className="relative w-[1600px] h-[511px]">
          <video
            className="w-full h-full object-cover rounded-b-3xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              Welcome to Our Blog world
            </h1>
          </div>
        </div>
      </section>

    <div className="max-w-6xl mx-auto ">
      
      <h2 className="md:text-3xl text-2xl mt-20 font-bold text-center text-red-600 mb-8 border-b-4 border-yellow-500 pb-2">
        📢 Latest Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/blogdetail/${blog.blog_slug}`} key={blog.id}>
            <p className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] flex flex-col justify-between">
              {blog.blog_image ? (
                <div className="relative w-full h-48">
                  <Image
                    src={`https://admiredashboard.theholistay.in/${blog.blog_image}`}
                    alt={blog.blog_title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image Available
                </div>
              )}

              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {blog.blog_title}
                  </h3>
                  <p className="text-gray-600 mt-2 h-[72px] overflow-hidden line-clamp-3">
                    {blog.blog_description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Author:</strong> {blog.blog_author_name}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleShare(blog.id);
                    }}
                    className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Share
                  </button>
                  <span className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                    Read More
                  </span>
                </div>
              </div>
            </p>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default BlogList;
