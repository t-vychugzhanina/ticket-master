
module.exports = {

  entry: './index.js',

  output: {
    filename: 'bundle.js',
  },

    resolveLoader: {
        moduleExtensions: ['-loader']
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

};