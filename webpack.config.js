
var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        profile: './src/profile.js',
        feed: './src/feed.js',
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,"assets"),
        filename: '[name].js',
        publicPath:"/assets/",
    },
    resolve: {
        extensions: ['.js', '.json', '.less','.css']
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader?presets[]=es2015&presets[]=react",
                include: /src/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader!less-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        commonsPlugin,
        new ExtractTextPlugin("[name].css")
    ]
}