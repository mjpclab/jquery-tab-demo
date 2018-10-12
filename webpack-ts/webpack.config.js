const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/ts/main.ts',
	output: {
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
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}

		]
	}
};