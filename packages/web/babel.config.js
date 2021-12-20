module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { displayName: false }],
    [
      'import',
      {
        libraryName: 'antd',
        style: true
        // "style": "css"
      }
    ]
  ]
}
