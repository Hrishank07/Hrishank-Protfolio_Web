/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
  // Compress static files
  compress: true,
  // Generate sitemap
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig