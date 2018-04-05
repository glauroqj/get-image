const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );

module.exports = {
	entry: {
		popup: './pages/popup.html',
		gallery: './pages/gallery.html',
		popup: './scripts/popup.js',
		gallery: './scripts/gallery.js',
		background: './scripts/background.js',
		content: './scripts/content.js',
		gallery_component: './scripts/gallery_component.js',
		loading_component: './scripts/loading_component.js',
		modal_component: './scripts/modal_component.js',
		store_popup: './scripts/store_popup.js',
		store_gallery: './scripts/store_gallery.js'
		// components: [
		// './scripts/components/gallery-component.js',
		// './scripts/components/loading-component.js',
		// './scripts/components/modal-component.js'
		// ]
	},
	output: {
		path: path.join(__dirname, './dist'),
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