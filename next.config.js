/** @type {import('next').NextConfig} */
const nextConfig = () => {
  return {
    output: 'export',
    basePath: '/my-website',
    assetPrefix: '/my-website/',
    images: {
      unoptimized: true,
    }
  }
}

module.exports = nextConfig
