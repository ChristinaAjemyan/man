const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.join(__dirname, '../../dist/js/'),
    publicPath: './js/',
    filename: 'app.js'
  },
  plugins: [
  ],
  // support source maps
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /tinymce[\\/]skins[\\/]/,
        loader: 'file-loader?name=[path][name].[ext]&context=node_modules/tinymce'
      },
      { test: /\.html$/, exclude: /node_modules|bower_components/, use: ['html-loader'] },
      { test: /\.js$/, exclude: /node_modules|bower_components/, 
        use: { 
          loader: 'babel-loader', 
          options: {
            presets: ['env'], 
            plugins: []
          }
        } 
      },
      { test: /\.css$/, exclude: /node_modules|bower_components/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, exclude: /node_modules|bower_components/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // // load images (inline base64 URLs for <=30k images)
      { test: /\.(png|svg|jpg|gif)$/, exclude: /node_modules|bower_components/, use: ['url-loader?limit=30720'] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../../"),
  }
};