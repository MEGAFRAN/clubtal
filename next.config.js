/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io"],
  },
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
