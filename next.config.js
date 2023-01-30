/** @type {import('next').NextConfig} */
const nextConfig = {
  // Toggled to false because useEffect triggers twice under strict mode
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
