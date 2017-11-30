const webpack = require( 'webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin');
const merge = require( 'webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
module.exports = merge( webpackBaseConfig,{
    output: {
        publicPath:'/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'vendors.[hash].js'
        }),
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV: 'production'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './template/index.ejs',
            inject: false
        })
    ]
})
