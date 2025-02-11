import { motion } from "framer-motion";
import Link from "next/link";

export default function TrendingSection() {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16">
      <h3 className="text-center text-2xl font-bold pb-8 text-[#CF1E27] mt-20">
        Trending Of Admire Holidays
      </h3>

      <div className="overflow-hidden py-4">
        {/* Motion container to animate the scroll */}
        <motion.div className="flex flex-wrap justify-center gap-8 mt-20">
          {/* Andaman Section */}
          <div className="w-full sm:w-80 md:w-96 relative flex flex-col items-center animate-bounce">
            <Link href="/packages/andaman/0">
              <video
                autoPlay
                muted
                loop
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              >
                <source src="/Andaman1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-[#CF1E27] bg-opacity-50 p-4 text-center">
                <h3 className="text-white font-bold text-lg">Andaman</h3>
                <p className="text-white text-sm">
                  Explore the beautiful beaches and crystal-clear waters of
                  Andaman.
                </p>
              </div>
            </Link>
          </div>

          {/* Sikkim Section */}
          <div className="w-full sm:w-80 md:w-96 relative flex flex-col items-center animate-bounce">
            <Link href="/packages/sikkim/0">
              <video
                autoPlay
                muted
                loop
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              >
                <source src="/Sikkim1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-[#CF1E27] bg-opacity-50 p-4 text-center">
                <h3 className="text-white font-bold text-lg">Sikkim</h3>
                <p className="text-white text-sm">
                  Discover the beauty of the Himalayas and rich cultural
                  heritage of Sikkim.
                </p>
              </div>
            </Link>
          </div>

          {/* Thailand Section */}
          <Link href="/packages/Thailand/0"> <div className="w-full sm:w-80 md:w-96 relative flex flex-col items-center animate-bounce">
            <video
              autoPlay
              muted
              loop
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            >
              <source src="/Andaman1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-[#CF1E27] bg-opacity-50 p-4 text-center">
              <h3 className="text-white font-bold text-lg">Thailand</h3>
              <p className="text-white text-sm">
                Explore the exotic beaches and vibrant culture of Thailand.
              </p>
            </div>
          </div></Link>
        </motion.div>
      </div>
    </div>
  );
}
