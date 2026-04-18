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
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  trailingSlash: false,
  
  // Disable static generation for specific pages
  output: 'standalone',
  skipTrailingSlashRedirect: true,
  
  // This tells Next.js not to statically generate these pages
  staticPageGenerationTimeout: 120,
}

module.exports = nextConfig