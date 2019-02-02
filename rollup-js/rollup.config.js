import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import staticSite from 'rollup-plugin-static-site';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/main.js',
		format: 'iife'
	},
	plugins: [
		resolve(),
		commonjs(),
		postcss({
			plugins: [],
			extract: true
		}),
		staticSite({
			dir: 'dist',
			css: 'dist/main.css',
			template: {path: 'public/index.html'}
		})
	]
};
