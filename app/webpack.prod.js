const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	plugins: [
	new SimpleProgressWebpackPlugin(),
	new UglifyJSPlugin({
		cache: false,
		parallel: false,
		sourceMap: true
	}),
	new CopyWebpackPlugin([
		{from:'./pages/popup.html', to:'/pages'},
		{from:'./pages/gallery.html', to:'/pages'},
		{from:'./scripts/*.js', to:'/scripts'},
		{from:'./manifest.json', to:''},
		{from:'./images', to:'./images'},
		{from:'./vendor', to:'./vendor'}
		])
	]
});