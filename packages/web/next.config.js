const withAntdLess = require('next-plugin-antd-less');
const withTM = require('next-transpile-modules')([
  "@amcharts/amcharts4"
])

module.exports = withTM(withAntdLess({
  lessVarsFilePath: './src/assets/antd-custom.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
}));
