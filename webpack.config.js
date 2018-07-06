const path = require('path');

const pkg = require('./package.json');

const ENTRY_FILE = path.resolve(__dirname, 'index.js');

const OUTPUT_PATH = path.resolve(__dirname, 'dist');

let OUTPUT_FILE = pkg.name + '.js';

if (process.env.NODE_ENV !== 'development') {
    OUTPUT_FILE = pkg.name + '.min.js';
}

module.exports = c = {

    mode: process.env.NODE_ENV,

    entry: ENTRY_FILE,

    output: {
        path: OUTPUT_PATH,
        filename: OUTPUT_FILE
    }

}