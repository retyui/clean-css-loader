module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "8.9.0"
				}
			}
		]
	],
	plugins: ["babel-plugin-add-module-exports"]
};
