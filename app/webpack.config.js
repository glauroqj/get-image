// const webpack = require('webpack');
// const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const WebpackOnBuildPlugin = require('on-build-webpack');
// const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
// const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');

// /* DOCUMENTATION 
// https://webpack.js.org/guides/production/
// */

// module.exports = {
// 	devServer: {
// 		historyApiFallback: true,
// 		hot: true,
// 		inline: true,
// 		progress: true,
// 		contentBase: [
// 			path.join(__dirname, "vendor/*.css"),
// 			path.join(__dirname, "scripts/*.js"), 
// 			path.join(__dirname, "images/"), 
// 			path.join(__dirname, "pages/*.html")
// 		],
// 		port: 8080,
// 	},
// 	watch: true,
// 	entry: {
// 		popup: './scripts/popup.js',
// 		gallery: './scripts/gallery.js',
// 		background: './scripts/background.js',
// 		content: './scripts/content.js',
// 		components: [
// 		'./scripts/components/gallery-component.js',
// 		'./scripts/components/loading-component.js',
// 		'./scripts/components/modal-component.js'
// 		]
// 	},
// 	output: {
// 		path: path.join(__dirname, './dist'),
// 		filename: '[name].min.js'
// 	},
// 	module: {
// 		loaders: [
// 		{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			loaders: 'babel-loader',
// 			query: {
// 				presets: [
// 				['es2015', {modules:false}]
// 				]
// 			}
// 		}
// 		],
// 	},
// 	plugins: [
// 	new SimpleProgressWebpackPlugin(),
// 	new webpack.optimize.UglifyJsPlugin({		
// 		parallel: false,
// 		mangle: false,	
// 		compress: { warnings: false },		
// 		output: { comments: false }		
// 	}),
// 	new CopyWebpackPlugin([
// 		{from:'./pages/popup.html', to:''},
// 		{from:'./pages/gallery.html', to:''},
// 		{from:'./manifest.json', to:''},
// 		{from:'./images', to:'./images'},
// 		{from:'./vendor', to:'./vendor'}
// 		]),
// 	new WebpackOnBuildPlugin(function(stats) {

// 	}),
// 	new CopyWebpackPlugin([
// 		{from:'./dist/popup.html', to:'./prod/dist'},
// 		{from:'./dist/gallery.html', to:'./prod/dist'},
// 		{from:'./dist/manifest.json', to:'./prod'},
// 		{from:'./dist/images', to:'./prod/images'},
// 		{from:'./dist/vendor', to:'./prod/vendor'},
// 		{from:'./dist/background.min.js', to:'./prod/dist'},
// 		{from:'./dist/popup.min.js', to:'./prod/dist'},
// 		{from:'./dist/components.min.js', to:'./prod/dist'},
// 		{from:'./dist/content.min.js', to:'./prod/dist'},
// 		{from:'./dist/gallery.min.js', to:'./prod/dist'}
// 		])
// 	]
// };


// new HtmlWebpackPlugin({
// 	// filename: 'popup.html',
// 	// template: './pages/popup.html',
// 	// minify: {
// 	// 	collapseWhitespace: true,
// 	// 	removeComments: true,
// 	// 	removeRedundantAttributes: true,
// 	// 	removeScriptTypeAttributes: true,
// 	// 	removeStyleLinkTypeAttributes: true
// 	// },
// 	// filename: 'gallery.html',
// 	// template: './pages/gallery.html',
// 	// minify: {
// 	// 	collapseWhitespace: true,
// 	// 	removeComments: true,
// 	// 	removeRedundantAttributes: true,
// 	// 	removeScriptTypeAttributes: true,
// 	// 	removeStyleLinkTypeAttributes: true
// 	// }
// }),