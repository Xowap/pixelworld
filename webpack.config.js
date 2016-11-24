const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        app: ['./app/main.js'],
    },
    output: {
        path: path.join(__dirname, 'build', 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2'],
                },
            },
        ],
        noParse: [
            /node_modules\/aframe\/dist\/aframe\.js/,
        ],
    },
};
