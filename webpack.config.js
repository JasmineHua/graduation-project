const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/app.js'
    },
    //入口文件输出配置
    output: {
        path: 'static',
        filename: 'app.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ]
    },
    plugins: [new HtmlWebpackPlugin(
      title: 'aaa',
      filename: 'index.html'

    )]
};
