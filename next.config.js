/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["source.unsplash.com"],
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
