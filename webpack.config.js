const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  mode: 'development', // Set to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.css$/i, // Test for CSS files
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Use these loaders
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Add this rule for font files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000, // You can change the port if needed
    open: true, // Opens the browser automatically
  },
};
