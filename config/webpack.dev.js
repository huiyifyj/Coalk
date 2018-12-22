/**
 * Webpack Development Environment Configuration.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',

    devtool: 'cheap-module-source-map',

    entry: {
        coalk: './index.js'
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        library: 'Coalk',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss']
    },

    // wepack-dev-server config
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        contentBase: path.resolve(__dirname, '..', 'dist'),
        inline: true,
        compress: true,
        stats: 'errors-only',
        overlay: {
            errors: true,
            warnings: true,
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            APP_VERSION: `'${require('../package.json').version}'`,
            APP_NAME: 'Coalk'
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
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
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
                            minimize: false,
                            interpolate: true
                        }
                    }
                ]
            }
        ]
    },

}
