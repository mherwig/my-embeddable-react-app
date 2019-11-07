const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
        filename: 'app.js',
        libraryTarget: 'umd'
    }
};