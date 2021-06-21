const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'broox-blobs.js',
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
    },
};