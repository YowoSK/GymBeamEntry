/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gymbeam.sk',
        pathname: '/media/logo/stores/1/GB_Logo_Energy_SK.png',
      },
    ],
  },
};

module.exports = nextConfig;
