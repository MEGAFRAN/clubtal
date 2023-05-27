/**
 * @type {import('next').NextConfig}
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public"
})

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
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

module.exports = withPWA(nextConfig)
