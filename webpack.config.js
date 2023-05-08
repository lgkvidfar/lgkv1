const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/main.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './app_dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // module: {
  //   rules: [
  //     {
  //       // For all .js and .jsx files and ts and tsx, use babel-loader
  //       test: /\.(js|jsx|ts|tsx)$/,
  //       exclude: /node_modules/,
  //       use: 'babel-loader',
  //     },
  //     {
  //       test: /\.css$/i,
  //       include: path.resolve(__dirname, 'src'),
  //       use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     },
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
}
