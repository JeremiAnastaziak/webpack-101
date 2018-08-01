const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './index.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
    port: 9000
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new htmlWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
};
