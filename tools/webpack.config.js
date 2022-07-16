const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  entry: {
    index: path.resolve(__dirname, '../src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'reactjs-localizer',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
