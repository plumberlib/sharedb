const path = require('path');

module.exports = [{
    entry: './lib/client/index.js',
    mode: 'production',
    resolve: {
        extensions: [ '.js' ]
    },
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: 'sharedb-client.js'
    }
}];