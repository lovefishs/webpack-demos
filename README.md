# webpack demos

webapck3 + react

webpack 默认配置文件 `webpack.config.js`

* `webpack <entry> [<entry>] <output>` – 构建文件
* `webpack -w` – 监听项目
* `webpack --colors` – 命令行输出带颜色
* `webpack -p` – 发布(快捷键，相当于 `--optimize-minimize --define process.env.NODE_ENV="production"`)
* `webpack -d` – 包含 source maps 方便调试(快捷键，相当于 `--debug --devtool eval-cheap-module-source-map --output-pathinfo`)

## 环境依赖

* Node.js v8+
* npm v5+

## 安装

```bash
$ git clone git@192.168.1.121:front-end/webpack-demos.git
$ cd webpack-demos
$ npm install
$ npm run demo-01
$ npm run demo-02
$ ...
```

## 目录

* [01](#01) 单模块入口
* [02](#02) 多模块入口
* [03](#03) babel-loader
* [04](#04) css-loader
* [05](#05) image(font) loader
* [06](#06) CSS Module
* [07](#07) CSS Module & postcss-loader
* [08](#08) CSS Splitting(extract-text-webpack-plugin)
* [09](#09) html-webpack-plugin
* [10](#10) 使用环境变量(DefinePlugin)
* [11](#11) common chunk(CommonsChunkPlugin)
* [12](#12) manifest(CommonsChunkPlugin)
* [13](#13) vendor chunk(CommonsChunkPlugin)
* [14](#14) vendor chunk(DllPlugin & DllReferencePlugin)
* [15](#15) common chunk and vendor chunk(CommonsChunkPlugin)
* [16](#16) Code Splitting - Async
* [17](#17) Code Splitting - Async(async/await)
* [18](#18) 外部扩展(externals)
* [19](#19) 作用域提升(ModuleConcatenationPlugin)
* [20](#20) Devtool
* [21](#21) HMR(Hot Module Replacement)
* [22](#22) React HMR(Hot Module Replacement)
* [23](#23) Tree Shaking
* [24](#24) 创建 Library
