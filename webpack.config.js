const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};
module.exports = {
    entry: [PATHS.src + '/index.js'],
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]

            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ],
    devServer: {
        contentBase : path.join(__dirname,'dist'),
        port:3000,
        hot:true
    },
    mode: "development",

};