module.exports = api => {
  api.cache(true)
  
  const presets = ['next/babel']
  
  const plugins = [
    [
      'import',
      {
        'libraryName': 'antd',
        'style': true
        // 'style': 'css'
      }
    ]
  ]
  
  return { plugins, presets }
}