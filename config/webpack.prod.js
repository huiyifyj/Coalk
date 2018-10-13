/**
 * Webpack Production Environment Configuration.
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('../package.json');

const BANNER = `Coalk v${pkg.version}
Copyright (c) 2018 ${pkg.author.name}.`

module.exports = {

    mode: 'production',

    devtool: 'source-map',

    entry: {
        coalk: './index.js'
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].min.js',
        library: 'Coalk',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss']
    },

    plugins: [
        new webpack.DefinePlugin({
            APP_VERSION: `'${require('../package.json').version}'`,
            APP_NAME: 'Coalk'
        }),
        new webpack.BannerPlugin({
            banner: BANNER,
            include: 'fyj.min.js'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, 'postcss.config.js')
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true
                        }
                    }
                ]
            }
        ]
    },

}
