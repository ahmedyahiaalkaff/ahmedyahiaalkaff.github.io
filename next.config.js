/** @type {import('next').NextConfig} */

const { PHASE_EXPORT } = require('next/constants')

const nextConfig = (phase, {defaultConfig}) => {
  if(phase === PHASE_EXPORT){
    return {
      output: 'export',
      images: {
        unoptimized: true,
      },
      // basePath: isProd?'/my-website':'',
    }
  }
  return {}
}

module.exports = nextConfig
