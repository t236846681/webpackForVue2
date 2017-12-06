// nodejs 中的path模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, '../app/index/index.js'),
    // 输出配置
    output: {
        // 输出路径
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        // 此选项决定了非入口(non-entry) chunk 文件的名
        chunkFilename: '[id].[chunkhash].js'
    },
    //这些选项能设置模块如何被解析
    resolve: {  
        //自动解析确定的扩展
        // extensions: ['.js', '.vue'],
        //创建import 或者require的别名，来确保模块引入变得简单
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: 'es2015'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}