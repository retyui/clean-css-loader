module.exports = {
	root: true,
	parser: "babel-eslint",
	plugins: [
		"import",
		"prettier"
	],
	"extends": [
		"webpack",
		"plugin:import/errors",
		"plugin:import/warnings",
		"eslint:recommended",
		"plugin:prettier/recommended"
	],
	env: {
		node: true,
		es6: true,
		jest: true
	},
	parserOptions: {
		ecmaVersion: 2017
	},
	rules:{
		'no-unused-vars': 'warn'
	}
};
