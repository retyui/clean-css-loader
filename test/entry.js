var expect = chai.expect;

function expectOutput(output, result) {
	expect(output).to.equal(result);
}

describe("clean-css-loader", function() {
	it("default options", function() {
		var css = require("!!raw-loader!clean-css-loader!./app.css");

		expect(css).is.a('string');
		expectOutput(css, "@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:'«' \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}");
	});

	it("level 2", function() {
		var css = require('!!raw-loader!clean-css-loader?{"level":"2"}!./app.css');

		expect(css).is.a('string');
		expectOutput(css, "@charset \"utf-8\";h1::before,h1:before{margin:10px 20px;color:red;font-weight:400;background-position:bottom right;quotes:'«' \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}");
	});

	it("beautify", function() {
		var css = require('!!raw-loader!clean-css-loader?{"format": "beautify"}!./app.css');

		expect(css).is.a('string');
		expectOutput(css.replace(/[\r]/g,''), "@charset \"utf-8\";\nh1::before,\nh1:before {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-weight: 400;\n  font-weight: 400;\n  background-position: bottom right;\n  quotes: '«' \"»\";\n  background: linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);\n  min-width: initial\n}");
	});

	it("css-loader", function() {
		var css = require('!!css-loader!clean-css-loader!./app.css').toString().replace('\\AB','«').replace('\\BB','»');

		expect(css).is.a('string');
		expectOutput(css, "@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:'«' \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}");
	});

	it("webpack.config.js", function() {
		var css = require('./app.test.css');

		expect(css).is.a('string');
		expectOutput(css, '@charset "utf-8";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\'«\' "»";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}');
	});
});
