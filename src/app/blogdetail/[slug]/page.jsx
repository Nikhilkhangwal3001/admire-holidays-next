"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return; // 🚀 Ensure router is ready before using query
    const { blog_slug } = router.query;

    async function fetchBlog() {
      try {
        const res = await fetch(`https://admiredashboard.theholistay.in/public-blog/${blog_slug}`);
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
  }, [router.isReady, router.query]); // ✅ Wait for `router.isReady`

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (!blog) return <p className="text-center text-red-500">Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.blog_title}</h1>
      <p className="text-gray-600 mb-4">{blog.blog_description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Author: {blog.blog_author_name}</span>
        <span>Category: {blog.blog_category}</span>
      </div>
    </div>
  );
}
