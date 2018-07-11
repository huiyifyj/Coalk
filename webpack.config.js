const path = require('path');

const pkg = require('./package.json');

const ENTRY_FILE = path.resolve(__dirname, 'index.js');

const OUTPUT_PATH = path.resolve(__dirname, 'dist');

let OUTPUT_FILE = pkg.name + '.js';

if (process.env.NODE_ENV !== 'development') {
    OUTPUT_FILE = pkg.name + '.min.js';
}

module.exports = {

    mode: process.env.NODE_ENV,

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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    }

}