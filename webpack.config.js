var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        symlinks: false
    }
};