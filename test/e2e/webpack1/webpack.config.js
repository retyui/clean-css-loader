const { resolve } = require("path");

const getConfig = (context, outputFilename, options) => ({
	context,
	entry: "./index.js",
	output: {
		path: context,
		filename: outputFilename
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "raw!clean-css"
			}
		],
		"clean-css": options
	}
});

module.exports = [getConfig(resolve(__dirname, "./tests/app/"), "app.test.js")];
