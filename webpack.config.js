var path = require('path');
module.exports = {
  entry: {
    main: './src/index.ts',
    heatmap:'./src/heatmap.ts'
  },
  module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static/js')
    }
};
