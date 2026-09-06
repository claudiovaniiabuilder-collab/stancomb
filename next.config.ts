import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/fleetos",
        destination: "/worsley",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
