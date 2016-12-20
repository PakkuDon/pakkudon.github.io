module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname + '/src'
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname + '/src'
      }
    ]
  }
};
