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
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },
      {
        test: /\.((png)|(jpg))$/,
        loaders: [
          'file',
          'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 80}}'
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars',
        include: __dirname + '/src'
      }
    ]
  }
};
