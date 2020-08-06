const path = require('path');

module.exports = {
    entry: __dirname + '/styles/index.scss',
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: { outputPath: './', name: '[name].min.css'}
            },
            'sass-loader'
          ]
        }
      ]
    }
};
