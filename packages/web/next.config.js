const withAntdLess = require('next-plugin-antd-less')
const withTM = require('next-transpile-modules')(['@amcharts/amcharts4', 'react-markdown'])

module.exports = withTM(
  withAntdLess({
    compiler: {
      styledComponents: true,
    },
    lessVarsFilePath: './src/assets/antd-custom.less',
    lessVarsFilePathAppendToEndOfContent: true,
    cssLoaderOptions: {},
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return config
    },
    async redirects() {
      return [
        {
          source: '/:network(ethereum|ropsten|polygon|arbitrum-one|polygon-mumbai|arbitrum-rinkeby)/create/:address(0x.*)',
          destination: '/:network/create/github',
          permanent: true,
        },
      ]
    },
  })
)
