module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    })
    return config
  },
}
