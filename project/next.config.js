/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,

  },
  images: {
    domains: ["images.unsplash.com", "img.clerk.com"], // Allow images from Unsplash and Clerk
  },
  images: { unoptimized: true },
};
module.exports = {
  trailingSlash: true,
};


module.exports = nextConfig;
