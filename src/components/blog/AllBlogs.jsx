"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPageCard2 from "../cards/BlogPageCard2";
import BlogHeader from "./BlogHeader";

const AllBlogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors

  // Function to fetch blog data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://admiredashboard.theholistay.in/public-blogs");
      // Ensure the response data is valid
      if (response.data && Array.isArray(response.data)) {
        setBlogData(response.data); // Assuming the response is an array of blog posts
      } else {
        setError("Invalid data format received.");
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setError("Error fetching data, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch blog data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Retry fetching data if an error occurs
  const handleRetry = () => {
    setError(null);
    fetchData();
  };

  return (
    <>
      <div className="pt-32">
        <h1 className="text-center pb-5 font-bold text-2xl sm:text-4xl">
          Latest Blog Post
        </h1>

        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
            <button
              onClick={handleRetry}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && blogData.length === 0 && (
          <div className="text-center">No blog posts found.</div>
        )}

        {!loading && !error && blogData.length > 0 && (
          <div className="grid max-w-7xl px-10 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mx-auto my-10">
            {blogData.map((item) => (
              <BlogPageCard2
                link={item.link}
                key={item.link} // Use a unique identifier (e.g., item.link)
                imageUrl={item.imageUrl}
                title={item.title}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllBlogs;
