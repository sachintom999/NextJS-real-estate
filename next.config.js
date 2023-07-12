module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },

  webpack(config) {
    config.module.rules.push({
      test: / \.sbg$/,
      use: "@svgr/webpack",
    })
    return config
  },
}
