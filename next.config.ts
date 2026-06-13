import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/agri-science",
  output: "export",
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
  }
};

export default nextConfig;
