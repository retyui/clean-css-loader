module.exports = {
	presets: [["@babel/preset-env", { targets: { node: "10.13.0" } }]],
	plugins: ["babel-plugin-add-module-exports"],
};
