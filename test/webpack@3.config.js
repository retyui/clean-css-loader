module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'tmp/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.test\.css$/,
				use: [
					'raw-loader',
					{
						loader: 'clean-css-loader',
						options: {}
					}
				]
			}
		]
	}
}
