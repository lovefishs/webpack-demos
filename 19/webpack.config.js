const { resolve } = require('path')
const webpack = require('webpack')
const { ModuleConcatenationPlugin } = webpack.optimize

const { NODE_ENV } = process.env
const env = NODE_ENV || 'development'
const isDEV = env === 'development'

// 根据 https://zhuanlan.zhihu.com/p/27980441 重新理解 ModuleConcatenationPlugin 组件
// 要使用 Scope Hoisting，你的代码必须是用 ES2015 的模块语法编写
// 通过执行 npm run demo-19 与 npm run demo-19-2 生成 bundle.js 与 bundle.prod.js 进行查看对比
// ModuleConcatenationPlugin 插件不生效的原因：
// 1. 模块不是 ES2015 语法编写(webpack 会回退到默认的打包方式)
// 2. 使用了 ProvidePlugin(自动加载模块插件)
// 3. 使用了 eval() 函数
// 4. 应用有多个 entry
// 执行 webpack 时加上 --display-optimization-bailout 参数可以查看详细信息

module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: isDEV ? 'bundle.js' : 'bundle.prod.js',
  },
  plugins: (() => {
    const plugins = []

    if (!isDEV) {
      plugins.unshift(new ModuleConcatenationPlugin())
    }

    return plugins
  })(),
}
