import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  redirects: async () => [
    {
      source: "/(.*)",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
