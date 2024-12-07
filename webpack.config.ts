const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',  
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',  
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',  
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/inline',    
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,  
          },
        },
      },
      {
        test: /\.module\.css$/i, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true, 
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 3017,
    hot: true,
    open: true 
  },
  mode: 'development',
};
