const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            
            test: /\.(png|svg|jpg|gif|pdf)$/,
            use: [
                {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
                }
            ]
              
          },
        ],
      },
};