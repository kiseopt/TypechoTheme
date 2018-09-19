import typescript from 'rollup-plugin-typescript'
import * as ts from 'typescript'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import node from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
	entry: './src/app.tsx',
	dest: './dist/app.dist.js',
	format: 'umd',
	name: 'Typtheme',
	plugins: [
		node({
			jsnext: true,
			main: true
		}),
		commonjs({
			include: 'node_modules/**',
			ignoreGlobal: true
		}),
		typescript({
			typescript: ts
		}),
		replace({
			'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"' || '"production"',
			'global && global.process': 'false',
		}),
		serve({
			historyApiFallback: true,
			open: true,
			contentBase: './'
		}),
		livereload()
	],
	sourcemap: true,
	globals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	context: 'window'
}
