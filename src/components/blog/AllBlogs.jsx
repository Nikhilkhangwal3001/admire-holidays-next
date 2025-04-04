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
        // Sorting blogs in descending order (latest first)
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

  // Function to copy blog link to clipboard
  const handleShare = (blogId) => {
    const blogUrl = `https://yourwebsite.com/blog/${blogId}`;
    navigator.clipboard.writeText(blogUrl);
    alert("Blog link copied to clipboard!");
  };

  if (loading) return <p className="text-center text-xl font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-xl">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* Latest Blog Heading */}
      <h2 className="md:text-3xl text-2xl mt-20 font-bold text-center text-red-600 mb-8 border-b-4 border-yellow-500 pb-2">
        📢 Latest Blog
      </h2>

      {/* Blog List in Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {blog.blog_image && (
              <div className="relative w-full h-48">
                <Image
                  src={`https://admiredashboard.theholistay.in/${blog.blog_image}`}
                  alt={blog.blog_title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{blog.blog_title}</h3>
              <p className="text-gray-600 line-clamp-3">{blog.blog_description}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Author:</strong> {blog.blog_author_name}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleShare(blog.id)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Share
                </button>
                <Link href={`/blogdetail/${blog.blog_slug}`} passHref className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                    Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
