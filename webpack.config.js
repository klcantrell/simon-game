const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CompressionPlugin = require('compression-webpack-plugin'),
      MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].bundle.js"
	},
	module: {
    rules: [
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: [
	            ['env', {
	            	modules: false,
                exclude: [
                  "transform-regenerator",
                  "transform-async-to-generator"
                ]
	            }]
	          ],
            plugins: [
              "syntax-async-functions",
              "fast-async"
            ]
	        }
	      }
	    },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              minimize: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].mp3',
            outputPath: 'sounds/',
            publicPath: 'https://s3.us-east-2.amazonaws.com/kals-portfolio-assets/simon-game/sounds'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: 'https://s3.us-east-2.amazonaws.com/kals-portfolio-assets/fonts/'
          }
        }
      }
    ]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new MinifyPlugin({}, {
      exclude: /node_modules/
    })
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.ttf$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: true
    // })
  ]
}
