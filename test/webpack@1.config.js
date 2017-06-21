module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'tmp/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.test\.css$/,
				loader: 'raw!clean-css'
			}
		],
		"clean-css":{}
	}
}
