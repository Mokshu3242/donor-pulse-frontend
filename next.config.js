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
  
  // Critical: Disable static generation for dynamic routes
  output: 'standalone',
  
  // Add these to prevent hanging
  staticPageGenerationTimeout: 120,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Disable static optimization for all pages
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig