const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withCss = require('@zeit/next-css')
const withTM = require('next-transpile-modules')([
  "@amcharts/amcharts4"
])

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/assets/antd-custom.less'), 'utf8'))
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTM(withCss(
  withLess({
    webpack: (config, { isServer }) => {
      const amchartsExport = /(xlsx|pdfmake|canvg)/
      if (isServer) {
        const antStyles = /(antd\/.*?\/style).*(?<![.]js)$/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (request.match(amchartsExport)) return callback(null, 'commonjs ' + request)
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
      } else {
        const origExternals = [...config.externals]
        config.externals = [
          (_context, request, callback) => {
            if (request.match(amchartsExport)) return callback(null, 'commonjs ' + request)
            callback()
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ]
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
    env: {
      IS_PREVIEW: process.env.IS_PREVIEW
    },
    distDir: 'dist/src/.next',
    target: 'serverless',
    redirects: () => {
      return [
        {
          source: '/liquidity',
          destination: '/liquidity/v2',
          permanent: true
        }
      ]
    }
  })
))
