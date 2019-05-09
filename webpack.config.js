const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src')  
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}