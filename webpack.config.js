const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const plugins = [];
// const API_BASE_URL = JSON.stringify('http://localhost:8080');

const API_BASE_URL = JSON.stringify('https://raw.githubusercontent.com/estudarcomvoce/frontend-challenge/master/assets/courses.json');

plugins.push(new cleanWebpackPlugin(['dist']));

plugins.push(new webpack.DefinePlugin({ API_BASE_URL }));


plugins.push(new HtmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
  },
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
}));


plugins.push(
  new ExtractTextPlugin("styles.css")
);
plugins.push(new webpack.HotModuleReplacementPlugin())

plugins.push(new OptimizeCssAssetsWebpackPlugin({
  cssProcessor: require('cssnano'),
  cssProcessorOptions: {
    discardComments: {
      removeAll: true
    }
  },
  canPrint: true
}));

plugins.push(
  new CopyWebpackPlugin([
    {
      from: 'src/assets',
      to: 'src/assets',
      toType: 'dir'
    }
  ])
);



module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: ['bootstrap', 'jquery']
  },
  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'public/bundle.js',
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins,
  devServer: {
    historyApiFallback: true,
  }
};