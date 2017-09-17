const webpack = require('webpack');
const path = require('path');

module.exports = [{
	entry: './src/js/main.js',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	/*externals: {
		jquery: {
			commonjs: 'jquery',
			commonjs2: 'jquery',
			amd: 'jquery',
			root: 'jQuery'
		}
	},*/
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	devtool: 'source-map'
}, {
	entry: './src/js/with-css.js',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-with-css.js'
	},
	/*externals: {
		jquery: {
			commonjs: 'jquery',
			commonjs2: 'jquery',
			amd: 'jquery',
			root: 'jQuery'
		}
	},*/
	module: {
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
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