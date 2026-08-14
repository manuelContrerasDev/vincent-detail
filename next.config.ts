import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  experimental: {
    inlineCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 60, 75],
  },
};

export default nextConfig;
