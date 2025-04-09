import React, { lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";
import HeroSection from "@/components/homePageComponents/HeroSection";
import Query from "@/components/homePageComponents/QueryButton";
import Navbar from "@/components/Navbar";
import InViewComponent from "@/components/LazyLoading/InViewComponent";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import WeekendTripStateCarousel from '@/components/carousels/WeekendTripStateCarousel'
import WeekendTripTrendingcarousel from '@/components/carousels/WeekendTripTrendingCarousel'
import Resort from '@/components/carousels/ResortTripDestination'
// Lazy Loaded Components
// const QuestioningCardsLayout = lazy(() =>
//   import("@/components/homePageComponents/QuestioningCardsLayout")
// );
const SubscribeLetter = lazy(() =>
  import("@/components/homePageComponents/SubscribeLetter")
);
const YoutubeBanner = lazy(() =>
  import("@/components/homePageComponents/YoutubeBanner")
);
// const DomesticDestinationCarousel = lazy(() =>
//   import("@/components/carousels/DomesticDestinationCarousel")
// );
const InternationalDestinationCarousel = lazy(() =>
  import("@/components/carousels/InternationalDestinationCarousel")
);
const PopularDestinationCarousel = lazy(() =>
  import("@/components/carousels/ExclusiveCarousel")
);
const HomePageBlogSection = lazy(() =>
  import("@/components/homePageComponents/HomePageBlogSection")
);
// const WeekendTrip = lazy(() =>
//   import("@/components/carousels/WeekendTripStateCarousel")
// );
const CompanyStatsSection = lazy(() =>
  import("@/components/homePageComponents/CompanyStatsSection")
);
// const LatestUpdatesSection = lazy(() =>
//   import("@/components/homePageComponents/LatestUpdatesSection")
// );
const TravelGuideline = lazy(() =>
  import("@/components/homePageComponents/TravelGuideline")
);
const Testimonial = lazy(() =>
  import("@/components/homePageComponents/Testimonial")
);
const FeaturesSection = lazy(() =>
  import("@/components/homePageComponents/FeaturesSection")
);
const TourismAlliance = lazy(() =>
  import("@/components/homePageComponents/TourismAlliance")
);
const Trending = lazy(() =>
  import("@/components/Trending/Trending")
);
const Footer = lazy(() => import("@/components/Footer"));

const Home = () => {
  return (
    <>
      <Query />
      <Navbar />
      <HeroSection />
      <InViewComponent>
        <Trending/>
      </InViewComponent>
      <InViewComponent>
        <PopularDestinationCarousel />
      </InViewComponent>
      <InViewComponent>
        <InternationalDestinationCarousel />
      </InViewComponent>
      <InViewComponent>
        <DomesticDestinationCarousel/>
      </InViewComponent>
      <InViewComponent>
        <WeekendTripStateCarousel/>
      </InViewComponent>
      <InViewComponent>
        <WeekendTripTrendingcarousel/>
      </InViewComponent>
      <InViewComponent>
        <Resort/>
      </InViewComponent>
      <InViewComponent>
        <TravelGuideline />
      </InViewComponent>
      
      <InViewComponent>
        <FeaturesSection />
      </InViewComponent>
      <InViewComponent>
        <CompanyStatsSection />
      </InViewComponent>
      <InViewComponent>
        <Testimonial />
      </InViewComponent>
      <InViewComponent>
        <HomePageBlogSection />
      </InViewComponent>
      <InViewComponent>
        <YoutubeBanner />
      </InViewComponent>
      <InViewComponent>
        <TourismAlliance />
      </InViewComponent>
      <InViewComponent>
        <SubscribeLetter />
      </InViewComponent>
      <InViewComponent>
        <Footer />
      </InViewComponent>
    </>
  );
};

export default Home;

export function generateMetadata() {
  return {
    metadataBase: new URL("http://localhost:3000"),
    title:
      "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
    description:
      "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
    keywords:
      // "best tour and travel agency in delhi,tour and travel agency in delhi,travel agency in delhi,best travel agency in delhi,best tour operators in delhi,international travel agencies in delhi,best travel agency in delhi ncr",
      "Best Places to visit to india,best travel agency in india/delhi/bangalore/pune/mumbai/ahmedabad/vadodara/nagpur/nashik/hyderabad/, cultural tours india,holidays packages,tourist places  in india,affordable internatioanl tours,cheap package holidays",
    openGraph: {
      title:
        "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
      description:
        "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
      url: "https://admireholidays.com",
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
    twitter: {
      card: "summary_large_image",
      title:
        "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
      description:
        "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
      images: ["https://admireholidays.com/products/goa"],
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
