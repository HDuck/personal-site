const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Anatoliy Bobrov',
            template: './pug/main.pug',
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: './css/[id].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [{
                    loader: "pug-loader",
                    options: {
                        pretty: true
                    }
                }]
            },
            {
                test: /\.s?[ca]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: '../'
                    }
                }
            }
        ]
    },
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './dist',
        compress: true
    }
};