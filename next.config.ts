import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
