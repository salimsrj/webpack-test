const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js',
        publicPath: '/assets/'
    },
    devServer: {
        port: 9009,
        contentBase: path.join(__dirname, '/'),
        writeToDisk: false,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin]
}