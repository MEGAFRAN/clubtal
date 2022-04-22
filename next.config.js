const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = {
  
  reactStrictMode: true,
      
  future: {
    webpack5: true,
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
}

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) { return nextConfig }

  return { ...nextConfig, basePath: '/crypto-crea', assetPrefix: '/crypto-crea' }
}
