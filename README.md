# webpack demos

webapck3 + react

## 环境依赖

* Node.js v8+
* npm v5+

## 安装

```bash
$ git clone https://github.com/lovefishs/webpack-demos.git
$ cd webpack-demos
$ npm install
$ npm run demo-01
$ npm run demo-02
$ ...
```

## 目录

* [01](/01) 单模块入口
* [02](/02) 多模块入口
* [03](/03) babel-loader
* [04](/04) css-loader
* [05](/05) image(font) loader
* [06](/06) CSS Module
* [07](/07) CSS Module & postcss-loader
* [08](/08) CSS Splitting(extract-text-webpack-plugin)
* [09](/09) html-webpack-plugin
* [10](/10) 使用环境变量(DefinePlugin)
* [11](/11) common chunk(CommonsChunkPlugin)
* [12](/12) manifest(CommonsChunkPlugin)
* [13](/13) vendor chunk(CommonsChunkPlugin)
* [14](/14) vendor chunk(DllPlugin & DllReferencePlugin)
* [15](/15) common chunk and vendor chunk(CommonsChunkPlugin)
* [16](/16) Code Splitting - Async
* [17](/17) Code Splitting - Async(async/await)
* [18](/18) 外部扩展(externals)
* [19](/19) Scope Hoisting(作用域提升，ModuleConcatenationPlugin)
* [20](/20) Devtool
* [21](/21) HMR(Hot Module Replacement)
* [22](/22) React HMR(Hot Module Replacement)
* [23](/23) Tree Shaking
* [24](/24) 创建 Library
* [25](/25) Enabled gzip(compression-webpack-plugin)
* [26](/26) 服务端代码打包

## 简单介绍

所有的 webpack 配置都是基于 `webpack.config.js` 文件。

### 01 - 单模块入口

这是 webpack 最简单的使用方式，在 `entry` 中指定入口模块，在 `output` 设置好输出路径(`filename` 也可以省略)。

## Mind Map

![Webpack 思维导图][1]

[1]: https://raw.githubusercontent.com/lovefishs/webpack-demos/master/webpack.png

