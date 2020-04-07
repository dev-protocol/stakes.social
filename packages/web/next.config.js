require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    config.resolve.alias['src'] = path.join(__dirname, 'src')
    config.resolve.alias['modules'] = path.join(__dirname, '/src/modules')
    config.resolve.alias['pages'] = path.join(__dirname, '/src/pages')
    config.resolve.alias['components'] = path.join(__dirname, '/src/components')

    return config
  },
  distDir: 'dist/src/.next',
}
