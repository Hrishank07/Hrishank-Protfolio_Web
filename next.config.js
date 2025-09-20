/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: false, // Disabled to prevent critters issues
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Clean up the public folder
  cleanDistDir: true,
  // Add trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig