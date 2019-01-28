module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: __dirname + '/src'
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.((png)|(jpg))$/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 80,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            }
          }
        ],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        include: __dirname + '/src'
      }
    ]
  }
};
