/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    const modifiedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      },
    }

    return modifiedConfig
  },
}

module.exports = nextConfig
