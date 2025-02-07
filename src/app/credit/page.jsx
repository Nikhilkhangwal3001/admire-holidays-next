import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-36">
        <h1 className="text-7xl text-center pb-10 font-bold mb-4">Credits</h1>

        {/* Image Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Image Credits</h2>
          <p className="text-base mb-2 ">
            All images used on this website are sourced from{" "}
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            .
          </p>
          <p className="tex-base ">
            Unsplash provides beautiful, free-to-use images that you can
            download and use for any purpose. Please review the{" "}
            <a
              href="https://unsplash.com/terms"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash Terms of Service
            </a>
            for more information on how you can use these images legally. By
            using these images, you agree to comply with Unsplash terms and
            conditions.
          </p>
        </section>

        {/* Video Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Video Credits</h2>
          <p className=" mb-2">
            Some videos used on this website are sourced from{" "}
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            .
          </p>
          <p>
            Videos on Unsplash are provided by generous creators for free use.
            Please refer to the
            <a
              href="https://unsplash.com/terms"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash License
            </a>
            for details on using these videos. Ensure compliance with Unsplash
            terms when using these videos.
          </p>
        </section>

        {/* GIF Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">GIF Credits</h2>
          <p className=" mb-2">
            Certain GIFs used on this website are sourced from
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            .
          </p>
          <p>
            GIFs on Unsplash are provided under the{" "}
            <a
              href="https://unsplash.com/license"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash License
            </a>
            and can be used for various purposes. Review the license for
            specific usage guidelines. Always adhere to the Unsplash License
            terms when using these GIFs.
          </p>
        </section>

        {/* Other Credits */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Other Credits</h2>
          <p className=" mb-2">
            Some design elements and content used on this website are sourced
            from other websites or creators.
          </p>
          <p className=" mb-4">
            Please ensure to provide appropriate attribution and comply with the
            terms of use for any external content used. The creators of external
            content deserve recognition for their work, and it is important to
            respect their rights and terms of use.
          </p>
        </section>
      </div>
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
};

export default page;
