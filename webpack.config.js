const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js', // js bundle
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/index.html', // copies index.html from src to dist
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // sass
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader?name=assets/images/[name].[ext]', // output images to assets folder
          },
        ],
      },
    ],
  },
};
