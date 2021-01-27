const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withCss = require('@zeit/next-css')
const withTM = require('next-transpile-modules')([
  "antd",
  "@emotion",
  "@testing-library",
  "await-semaphore",
  "dotenv",
  "fastq",
  "react-i18next",
  "subscriptions-transport-ws",
  "tsconfig-paths",
  "web3",
  "web3-bzz",
  "web3-core",
  "web3-core-helpers",
  "web3-core-method",
  "web3-core-subscriptions",
  "web3-eth",
  "web3-eth-abi",
  "web3-eth-accounts",
  "web3-eth-contract",
  "web3-eth-ens",
  "web3-eth-iban",
  "web3-eth-personal",
  "web3-net",
  "web3-providers-http",
  "web3-providers-ipc",
  "web3-providers-ws",
  "web3-shh",
  "web3-utils",
  "@amcharts/amcharts4/core",
  "@amcharts/amcharts4/charts",
  "@amcharts/amcharts4/themes/animated"
])

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/assets/antd-custom.less'), 'utf8'))
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTM(withCss(
  withLess({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /(antd\/.*?\/style).*(?<![.]js)$/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader'
        })
      }

      config.plugins = config.plugins || []

      config.plugins = [...config.plugins]

      config.resolve.alias['src'] = path.join(__dirname, 'src')
      config.resolve.alias['modules'] = path.join(__dirname, '/src/modules')
      config.resolve.alias['pages'] = path.join(__dirname, '/src/pages')
      config.resolve.alias['components'] = path.join(__dirname, '/src/components')

      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
          entries['main.js'].unshift('./polyfills.js')
        }
        return entries
      }

      return config
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    },
    env: {},
    distDir: 'dist/src/.next',
    target: 'serverless'
  })
))
