const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new ExtractTextPlugin('assets/css/bundle.css'),
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, 'src', 'html', 'index.html'),
    to: path.resolve(__dirname, 'dest', 'index.html')
  }]),
  new webpack.optimize.ModuleConcatenationPlugin()
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
  	sourceMap: true
  }));

  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }));

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
}

module.exports = env => ({
	devtool: 'source-map',
  entry: {
    bundle: path.resolve(__dirname, 'src', 'js', 'app.jsx'),
	  vendor: ['react', 'react-dom', 'react-redux', 'redux']
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dest')
  },
  module: {
    rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dest'),
    port: 8087
  }
})
