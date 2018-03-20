const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');


module.exports = {
	entry: {
		popup: './scripts/popup.js',
		gallery: './scripts/gallery.js',
		background: './scripts/background.js',
		content: './scripts/content.js',
		components: [
		'./scripts/components/gallery-component.js',
		'./scripts/components/loading-component.js',
		'./scripts/components/modal-component.js'
		]
	},
	output: {
		path: path.join(__dirname, './dist/scripts'),
		filename: '[name].js'
	},
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
	
	]
};