var path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')

const theme = require('./theme')

module.exports = override(
  addWebpackAlias({
    '@Layout': path.resolve(__dirname, 'src/layout')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
)
