module.exports = {
	presets: [
		[
			"env",
			{
				targets: {
					node: ["6.0.0"]
				}
			}
		]
	],
	plugins: ["babel-plugin-add-module-exports"]
};
