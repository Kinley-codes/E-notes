/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,

  },
  images: { unoptimized: true },
};
module.exports = {
  trailingSlash: true,
};

module.exports = nextConfig;
