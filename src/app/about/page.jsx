import CompanyStatsSection from "@/components/homePageComponents/CompanyStatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/homePageComponents/Testimonial";
import PageBanner from "@/components/PageBanner";
import React from "react";
import AboutUs from "@/components/aboutUs/AboutUs";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";

export default function page() {
  return (
    <main>
      <Navbar />
      <PageBanner heading={"About us"} text={"Home - About us"} />
      <AboutUs />
      <CompanyStatsSection />
      <Testimonial />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </main>
  );
}

export function generateMetadata() {
  return {
    title:
      "Best Tour and Travel Agency in India |Travel Agents in India - Admire Holidays",
    description:
      "Progressive Tours and Travels, Delhi's best tour and travel agency in India, offers top-notch India tour packages at affordable prices. Book now and embark on your dream journey!",
    keywords:
      "best tour and travel agency in India,tour and travel agency in India,india travel agency delhi,international travel agencies in india,tour and travel services in india,best tour operators in india,tour and travels in india",
    openGraph: {
      title:
        "Best Tour and Travel Agency in India |Travel Agents in India - Admire Holidays",
      description:
        "Progressive Tours and Travels, Delhi's best tour and travel agency in India, offers top-notch India tour packages at affordable prices. Book now and embark on your dream journey!",
      url: "https://admireholidays.com/about",
      siteName: "Admire Holidays",

      images: [
        {
          url: "https://admireholidays.com/products/goa",
          alt: "Admire Holidays",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      noimdcp: true,
      notranslate: true,
      nosnippet: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
    verification: {
      google: "YahooSeeker:Index,Follow",
      yandex: "Googlebot:Index,Follow",
    },
    other: {
      "msapplication-TileColor": "#da532c",
      "theme-color": "#ffffff",
      referrer: "origin-when-cross-origin",
      "format-detection": "telephone=no",
    },
    article: {
      section: "Admire Holidays",
      author: "Maitreya.com",
      tags: "best tour and travel agency in India,tour and travel agency in India,india travel agency delhi,international travel agencies in india,tour and travel services in india,best tour operators in india,tour and travels in india",
    },
  };
}
