const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: 'usage',
            }]],
            plugins: ['@babel/plugin-transform-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
};
