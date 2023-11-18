/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl26yht2ovo33.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
