const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		popup: './scripts/popup.js',
		gallery: './scripts/gallery.js',
		background: './scripts/background.js',
		content: './scripts/content.js',
		components: [
		'./scripts/components/gallery-component.js',
		'./scripts/components/loading-component.js',
		]
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].min.js'
	},
	watch: true,
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: 'babel-loader',
			query: {
				presets: [
				['es2015', {modules:false}]
				]
			}
		}
		],
	},
	plugins: [		
	new webpack.optimize.UglifyJsPlugin({		
		parallel: true,
		mangle: false,	
		compress: { warnings: false },		
		output: { comments: false }		
	}),
	new HtmlWebpackPlugin({
		// filename: 'popup.html',
		// template: './pages/popup.html',
		// minify: {
		// 	collapseWhitespace: true,
		// 	removeComments: true,
		// 	removeRedundantAttributes: true,
		// 	removeScriptTypeAttributes: true,
		// 	removeStyleLinkTypeAttributes: true
		// },
		// filename: 'gallery.html',
		// template: './pages/gallery.html',
		// minify: {
		// 	collapseWhitespace: true,
		// 	removeComments: true,
		// 	removeRedundantAttributes: true,
		// 	removeScriptTypeAttributes: true,
		// 	removeStyleLinkTypeAttributes: true
		// }
	}),
	new CopyWebpackPlugin([
		{from:'./pages/popup.html', to:''},
		{from:'./pages/gallery.html', to:''}
		// {from:'./images', to:'images'}
		// {from:'manifest.json', to:''},
		])
	]
};