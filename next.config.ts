import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    config.infrastructureLogging = {
      level: "error", // Suppress warnings and only show errors
    };

    return config;
  },
};

export default nextConfig;
