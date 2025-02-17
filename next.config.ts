import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
