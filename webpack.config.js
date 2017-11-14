const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const StartServerPlugin = require('start-server-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const backend = {
    entry: [
        'webpack/hot/poll?1000',
        './src/index'
    ],
    watch: true,
    target: 'node',
    devtool: 'sourcemap',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
        rules: [{
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, "src"),
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        "transform-object-rest-spread",
                        "transform-async-to-generator"
                    ],
                }
            },
            exclude: '/node_modules/'
        }]
    },
    node: {
        __filename: true,
        __dirname: true
    },
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js'
    }
};

module.exports = backend;