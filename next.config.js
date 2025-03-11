/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admiredashboard.theholistay.in",
      },
    ],
  },
};

module.exports = nextConfig;
