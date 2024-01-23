/** @type {import('next').NextConfig} */

const nextConfig = (phase, {defaultConfig}) => {
  return {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // basePath: isProd?'/my-website':'',
  }
  return {}
}

module.exports = nextConfig
