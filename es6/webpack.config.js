const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module : {
        rules: [{
          // A regex that looks at all Javascript files
          test: /\.js?$/,
          exclude : /node_modules/,
          loader: 'babel-loader',
          //this is where we define our presets
          query: {
            presets:['@babel/preset-env']
          }
        }]
      }
}

module.exports = config;