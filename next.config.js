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
  staticPageGenerationTimeout: 60,
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