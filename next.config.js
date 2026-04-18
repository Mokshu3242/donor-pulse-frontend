// frontend\next.config.js
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
    ignoreBuildErrors: false, // Set to false for production
  },
  eslint: {
    ignoreDuringBuilds: false, // Set to false for production
  },
  output: 'standalone',
  // Add this to handle static exports properly
  trailingSlash: false,
  // Ensure API routes work
  rewrites: async () => {
    return []
  },
}

module.exports = nextConfig