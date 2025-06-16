/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Allow access from any IP address
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.162.225:3000', '*'],
  },
}

module.exports = nextConfig
