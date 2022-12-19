const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development';
if (process.env.NODE_ENV === 'production') mode = 'production';

const tsLoader = {
  test: /\.[tj]s$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const imgAsset = {
  test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
  type: 'asset/resource',
};

const htmlLoader = {
  test: /\.html$/i,
  loader: 'html-loader'
};

const cssLoader = {
  test: /\.(sa|sc|c)ss$/i,
  // use: ['css-loader'],
  use: [mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',]
};

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource'
};

module.exports = {
  mode,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  optimization: { splitChunks: { chunks: 'all' } },
  devServer: {
    // contentBase: "dist",
    // publicPath: "/",
    // open: true,
    // hot: false,
    liveReload: true,
    historyApiFallback: true, // SPA
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: "index.html", }),
    new ESLintWebpackPlugin({ extensions: ['ts', 'js'] }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],
  module: {
    rules: [tsLoader, imgAsset, htmlLoader, cssLoader, fontLoader]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};