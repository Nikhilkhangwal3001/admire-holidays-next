"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./page.css"
export default function BlogPage({ params }) {
  const { blog_slug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [sections, setSections] = useState([]);

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


  useEffect(() => {
    const images = document.querySelectorAll('.note-float-right img');
    images.forEach((img, index) => {
      img.style.float = index % 2 === 0 ? 'left' : 'right';
      img.style.margin = index % 2 === 0 ? '0 16px 16px 0' : '0 0 16px 16px';
    });
  }, [BlogPage]);
  
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
              Welcome to Our Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Layout */}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 py-10 px-4">
        <div className="max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Blog Content */}
          <div className="md:col-span-2 bg-white  shadow-xl overflow-hidden">
            

            {/* Blog Content Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                {blog.blog_title}
                <hr className="border-2 border-red-500 w-32 mt-3" />
              </h1>
              <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src={`https://admiredashboard.theholistay.in/${blog.blog_image}`}
                alt={blog.blog_image_alt_text || "Blog Image"}
                layout="fill"
                objectFit="cover"
              />
            </div>
              <p className="text-lg text-gray-600 mb-8 italic">
                {blog.blog_description}
              </p>
              <div
                className="
    prose prose-lg max-w-none text-justify text-black leading-relaxed mb-10
    prose-img:rounded-xl
    prose-img:shadow-md
    prose-img:w-[320px]
    prose-img:h-[200px]
    prose-img:object-cover
    prose-img:block
    prose-img:mx-auto
    prose-img:my-4
  "
                dangerouslySetInnerHTML={{ __html: blog.blog_content }}
              />

              {/* Meta Info Slabs */}
              <div className="text-sm text-gray-600 mb-10">
                <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.blog_meta_title }}
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.blog_meta_description,
                    }}
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.blog_meta_keywords,
                    }}
                  />
                </div>
              </div>

              {/* Author & Category */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 border-t pt-5 gap-3">
                <span className="flex items-center gap-2">
                  ✍️ <strong className="font-medium">Author:</strong>{" "}
                  {blog.blog_author_name}
                </span>
                <span className="flex items-center gap-2">
                  📚 <strong className="font-medium">Category:</strong>{" "}
                  {blog.blog_category}
                </span>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mt-10">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                0 Comments
                <hr className="border-2 border-red-600  mt-2" />
              </h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                Leave a Comment
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-inner text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-inner text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                />

                <textarea
                  rows="4"
                  placeholder="Write your comment..."
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-inner text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition duration-300 font-medium"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6 md:sticky md:top-28 h-fit">
            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Search
                <hr className="text-2xl border-2 border-red-600 mt-2 " />
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 shadow-inner placeholder:text-gray-400"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  🔍
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <h2 className="text-xl font-semibold mb-6 text-gray-700">
                Categories
                <hr className="text-2xl border-2 border-red-600 mt-2" />
              </h2>

              <ul className="space-y-4">
                {[
                  "Option 1",
                  "Option 2",
                  "Option 3",
                  "Option 4",
                  "Option 5",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center rounded-xl bg-gray-100 px-5 py-4 text-gray-700 text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white shadow-md hover:shadow-xl"
                  >
                    <span>{category}</span>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      ➜
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Latest Posts{" "}
                <hr className="text-2xl border-2 border-red-600 " />
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post1.jpg"
                    alt="Post 1"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Why Mobile-First Design Matters
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post2.jpg"
                    alt="Post 2"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 How to Improve Website Speed
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post3.jpg"
                    alt="Post 3"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Top 5 SEO Tips in 2025
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post4.jpg"
                    alt="Post 4"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Responsive Design Checklist
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post4.jpg"
                    alt="Post 4"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Responsive Design Checklist
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post4.jpg"
                    alt="Post 4"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Responsive Design Checklist
                  </span>
                </li>
                <li className="hover:text-blue-600 cursor-pointer flex items-start gap-4">
                  <Image
                    src="/images/post4.jpg"
                    alt="Post 4"
                    width={120}
                    height={70}
                    className="rounded-md object-cover"
                  />
                  <span className="text-base font-medium leading-tight">
                    👉 Responsive Design Checklist
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
