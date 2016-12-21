module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
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
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.((png)|(jpg))$/,
        loaders: ['file']
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars',
        include: __dirname + '/src'
      }
    ]
  }
};
