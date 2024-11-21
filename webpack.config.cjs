const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src')
const publicPath = path.resolve(__dirname, 'public');
const isProd = process.env.NODE_ENV === 'production';

dotenv.config();

const getSettingsForStyles = (withModules = false) => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      !withModules
        ? 'css-loader'
        : {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd ? '[path][name]__[local]' : '[name]__[local]-[hash:base64]',
              },
            },
          },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['autoprefixer'],
          },
        },
      },
       'sass-loader',
    ];
  };

module.exports = {
    entry: path.resolve(srcPath, 'index.tsx'),
    output: {
        path: buildPath,
        filename: "bundle.js",
        publicPath: '/food/',
    },
    target: !isProd ? 'web' : 'browserslist',
    devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.module\.s?css$/,
                use: getSettingsForStyles(true),
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: getSettingsForStyles(),
            },
            {
                test: /\.[tj]sx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
          'process.env.API_KEY': JSON.stringify(process.env.API_KEY),  
          'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
          'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
          'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
          'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
          'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
          'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
          'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID), 
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'), 
            base: '/food/'
        }),
        !isProd && new ReactRefreshWebpackPlugin(),
        isProd && new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
        }),
        new TsCheckerPlugin (),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: publicPath,
                    to: buildPath,   
                },
            ],
        }),
    ].filter(Boolean),
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
        alias: {
            '@': srcPath,
            components: path.join(srcPath, 'components'),
            config: path.join(srcPath, 'config'),
            styles: path.join(srcPath, 'styles'),
            utils: path.join(srcPath, 'utils'),
            models: path.join(srcPath, 'models'),
            types: path.join(srcPath, 'types'),
            hoc: path.join(srcPath, 'hoc'),
            stores: path.join(srcPath, 'stores'),
        }
    },
}   