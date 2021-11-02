/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production;

  return {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss|css)$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: { modules: true }
            },
          ],
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        src: path.resolve(__dirname, './src'),
      }
    },
    output: {
      path: path.join(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html'
          },
          {}
        )
      )
    ],
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      hot: true,
      inline: true,
      port: 8080,
      open: true
    },
  };
};
