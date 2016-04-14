var path = require('path');

module.exports = {
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.join(__dirname, 'public/assets/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
