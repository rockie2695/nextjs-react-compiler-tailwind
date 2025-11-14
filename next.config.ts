import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: {
      compilationMode: "infer",
    },
  },
  // Enable file system polling for Docker
  devIndicators: {
    buildActivity: true,
  },
  // Enable Fast Refresh
  fastRefresh: true,
};

export default nextConfig;
