/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: false,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  optimizeFonts: true,
  cleanDistDir: true,
  trailingSlash: true,
  // Add basePath for static exports
  basePath: '',
}

module.exports = nextConfig