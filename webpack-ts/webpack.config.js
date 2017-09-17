const webpack = require('webpack');
const path = require('path');

module.exports = [{
	entry: './src/ts/main.ts',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	devtool: 'source-map'
}, {
	entry: './src/ts/with-css.ts',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-with-css.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	devtool: 'source-map'
}];