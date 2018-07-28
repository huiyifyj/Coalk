const path = require('path');

const pkg = require('./package.json');

const ENTRY_FILE = path.resolve(__dirname, 'index.js');

const OUTPUT_PATH = path.resolve(__dirname, 'dist');

const POSTCSS_CONFIG_FILE = path.resolve(__dirname, 'postcss.config.js');

let OUTPUT_FILE = pkg.name + '.js';

let DEVTOOL = 'cheap-module-source-map';

if (process.env.NODE_ENV !== 'development') {
    OUTPUT_FILE = pkg.name + '.min.js';
    DEVTOOL = 'source-map';
}

module.exports = {

    mode: process.env.NODE_ENV,

    devtool: DEVTOOL,

    entry: ENTRY_FILE,

    output: {
        path: OUTPUT_PATH,
        filename: OUTPUT_FILE
    },

    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']
    },

    // wepack-dev-server config
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        contentBase: OUTPUT_PATH,
        inline: true,
        compress: true,
        stats: 'errors-only',
        overlay: {
            errors: true,
            warnings: true,
        }
    },

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
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
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
                                path: POSTCSS_CONFIG_FILE
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
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
    }

}