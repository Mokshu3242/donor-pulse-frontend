/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove this entire eslint block:
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  output: 'standalone',
}

module.exports = nextConfig