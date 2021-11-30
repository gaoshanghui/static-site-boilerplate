module.exports = {
  mode: process.env.NODE_ENV,
  // Only generate source-map in the development mode.
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  entry: {
    // main: './src/js/main.js',
    main: './src/js/main.js',
    // another: './src/js/another.js', If you need multiple entry points.
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
