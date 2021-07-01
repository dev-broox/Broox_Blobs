const path = require('path');
var PACKAGE = require('./package.json');
var version = PACKAGE.version;

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `broox-blobs-${version}.js`,
        library: {
            name: 'brooxBlobsLibrary',
            type: 'umd',
        },
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    }
};