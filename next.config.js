const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

const nextConfig = {
  //This config doesn't work with Nextjs SSG

  /*i18n: {
    locales: ["en", "es"],
    defaultLocale: "en"
  },*/

  reactStrictMode: true,

  future: {
    webpack5: true,
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }

    return config
  },
}
