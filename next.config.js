/** @type {import('next').NextConfig} */

const getPosts = require("./lib/getPosts.js");
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

// module.exports = nextConfig
module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...nextConfig,
    env: {
      cmdk: getPosts.getPosts(),
    }
  };
}
