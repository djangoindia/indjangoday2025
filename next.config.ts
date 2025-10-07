import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djangoindia-prod-s3.s3.amazonaws.com',
        port: '',
        pathname: '/media/event_images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost:8090',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'djangoday.in/',
        port: '',
        pathname: '/',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;