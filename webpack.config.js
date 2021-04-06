module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        test: /\.css$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader', options: { importLoaders: 1}
            },
            'postcss-loader'
          ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ]
      },
      {
        test: /\.(jpg|png|eot|ico|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
};