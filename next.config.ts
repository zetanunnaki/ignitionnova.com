import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ignitionnova.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
