/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    experimental: { appDir: true },
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
