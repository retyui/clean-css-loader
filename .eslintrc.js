module.exports = {
	root: true,
	parser: "babel-eslint",
	plugins: ["prettier"],
	extends: ["webpack", "eslint:recommended", "plugin:prettier/recommended"],
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
	rules: {
		"no-unused-vars": "warn",
	},
};
