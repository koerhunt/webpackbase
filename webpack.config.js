const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        assets: './src.frontend/main.js'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    module: {
        rules: [
             // CSS LOADER
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
             // IMAGE LOADER
           {
              test: /\.(png|svg|jpg|gif)$/,
              loader: 'file-loader',
              options: {
                  outputPath: 'images',
                  publicPath: 'assets/images'
              },
           },
             // FONT LOADER
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    publicPath: 'assets/fonts'
                },
           },
             // CVS LOADER
            {
                test: /\.(csv|tsv)$/,
                loader: 'csv-loader',
                options: {
                    outputPath: 'data',
                    publicPath: 'assets/data'
                },
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
],
   },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
    },
};