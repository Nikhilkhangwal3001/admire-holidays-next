"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage({ params }) {
  const { blog_slug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          `https://admiredashboard.theholistay.in/public-blog/${blog_slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch blog data");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [blog_slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        ⏳ Loading Blog...
      </div>
    );

  if (!blog)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg">
        ❌ Blog not found.
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
        <div className="max-w-10xl mx-auto bg-white  backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 my-10">
          {/* Blog Image */}
          <div className="w-full h-[300px] relative">
            <Image
              src={`https://admiredashboard.theholistay.in/${blog.blog_image}`}
              alt={blog.blog_image_alt_text || "Blog Image"}
              layout="fill"
              objectFit="cover"
              className="rounded-t-3xl"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              {blog.blog_title}
            </h1>

            <p className="text-lg text-gray-600 mb-8 italic">
              {blog.blog_description}
            </p>

            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-10"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />

            {/* Blog Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500 mb-10">
              <div dangerouslySetInnerHTML={{ __html: blog.blog_meta_title }} />
              <div dangerouslySetInnerHTML={{ __html: blog.blog_meta_description }} />
              <div dangerouslySetInnerHTML={{ __html: blog.blog_meta_keywords }} />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-400 border-t pt-5">
              <span>✍️ <strong>Author:</strong> {blog.blog_author_name}</span>
              <span>📚 <strong>Category:</strong> {blog.blog_category}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
