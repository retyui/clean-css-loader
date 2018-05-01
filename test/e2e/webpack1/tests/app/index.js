/* eslint-disable no-useless-escape */

const expectOutput = (output, result) =>
	expect(output.replace(/\r\n/g, "\n")).toEqual(result);

describe("clean-css-loader", () => {
	it("default options", () => {
		expectOutput(
			require("!!raw-loader!clean-css-loader!./input.css"),
			`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
		);
	});

	it("level 2", () => {
		expectOutput(
			require('!!raw-loader!clean-css-loader?{"level":"2"}!./input.css'),
			`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px;color:red;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
		);
	});

	it("query beautify", () => {
		var css = require('!!raw-loader!clean-css-loader?{"format": "beautify"}!./input.css');
		expectOutput(
			css,
			'@charset "utf-8";\nh1::before,\nh1:before {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-weight: 400;\n  font-weight: 400;\n  background-position: bottom right;\n  quotes: "«" "»";\n  background: linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);\n  min-width: initial\n}'
		);
	});

	it("css-loader", () => {
		var css = require("!!css-loader!clean-css-loader!./input.css")
			.toString()
			.replace("\\AB", "«")
			.replace("\\BB", "»");

		expectOutput(
			css,
			`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
		);
	});

	it("webpack.config.js", () => {
		expectOutput(
			require("./input.css"),
			`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
		);
	});
});
