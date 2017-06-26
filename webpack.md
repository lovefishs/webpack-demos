# webpack

Node.js 模块，模块打包器，构建工具。

## 核心概念

Entry(入口)，Output(出口)，Loader(加载器)，Plugin(插件)

### Entry

webpack 会创建所有应用程序的依赖关系图表，入口设定告诉 webpack 从哪里开始，通俗的讲就是告诉 webpack 要创建多少模块。

entry 的配置非常灵活，比如：

```js
entry: './a.js',
entry: ['./a.js', './b.js'],
entry: {
  main: './a.js',
},
entry: {
  main: ['./a.js', './b.js'],
},
entry: {
  app: './app.js',
  vendor: ['react', 'react-dom'],
},
```

entry 可以通过 node.js 灵活生成，这里我们就能利用 node.js 读取本地文件，根据规则去生成我们想要的入口配置项，达到更大的灵活性。

### Output

webpack 将资源处理之后，需要我们配置 ouput 告诉它在哪里输出。

```js
output: {
  path: path.resolve(__dirname, 'dist'), // 绝对路径
  filename: 'xxx.js', // [name].js | [name].[chunkhash].js
},
```

output 的灵活配置方便我们把打包输出到任何我们想要输出的地方（有些做的好的系统是直接输出到 cdn）。

### Loader

针对不同的资源，webpack 需要依赖不同的 loader 程序来处理。通俗的说就是 webpack loader 把资源文件转换为 javascript 模块，然后添加到依赖图表中。

```js
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  }
};

module.exports = config;
```

*这里有个值得注意的地方，就是 loader 的配置是在 `module.rules` 中，而不是 `rules`。*

### Plugin

webpack loader 仅在单个文件的基础上进行转换，而 plugin 最常用于在打包模块的 **编译** 与 **组装** 周期。

```js
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};

module.exports = config;
```

## Manifest

在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：

* 你或你的团队编写的源码。
* 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
* webpack 的 runtime 和 manifest，管理所有模块的交互。

### Runtime

runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。

### Manifest

```js
+ app
  + src
    + js
      - app.js
      - a.js
      - b.js
    + css
      - app.css
  - index.html
  + dist
    - app.js
    - app.css
    - index.html
```

通过观察 `src` 和 `dist` 目录结构，我们源码目录包阶目录结构完全不同，那么 app.js 是怎么保证我们写的代码在目录结构变化的时候还能够正常的 `require` 我们的模块 `a.js` `b.js` 呢？我觉得 manifest 文件就是保证这一点的关键。

当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。
