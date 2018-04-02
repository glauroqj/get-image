const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		// index: 'pages/popup.html',
		openPage: 'popup.html',
		historyApiFallback: false,
		hot: true,
		inline: true,
		progress: true,
		port: 8080,
		open: true,
		publicPath: './',
		watchContentBase: true,
		contentBase: [
		path.join(__dirname, "/pages"), 
		path.join(__dirname, "/scripts"), 
		path.join(__dirname, "/vendor")
		]
	},
	watch: true
});