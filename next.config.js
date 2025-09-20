/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Change from 'standalone' to 'export'
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Remove other settings that might conflict
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig