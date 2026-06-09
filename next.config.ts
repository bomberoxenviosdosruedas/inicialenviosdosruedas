import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "html.tailus.io",
        pathname: "/blocks/customers/**",
      },
    ],
  },
};

export default nextConfig;
