/******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // The require function

	/******/ /******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId])
			/******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)

		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ exports: {},
			/******/ id: moduleId,
			/******/ loaded: false
			/******/
		}); // Execute the module function

		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		); // Flag the module as loaded

		/******/ /******/ module.loaded = true; // Return the exports of the module

		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)

	/******/ /******/ __webpack_require__.m = modules; // expose the module cache

	/******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__

	/******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports

	/******/ /******/ return __webpack_require__(0);
	/******/
})(
	/************************************************************************/
	/******/ [
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
			/* eslint-disable no-useless-escape, import/no-webpack-loader-syntax, import/no-unresolved */

			const expectOutput = (output, result) =>
				expect(output.replace(/\r\n/g, "\n")).toEqual(result);

			describe("clean-css-loader", () => {
				it("default options", () => {
					expectOutput(
						__webpack_require__(1),
						`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
					);
				});

				it("level 2", () => {
					expectOutput(
						__webpack_require__(2),
						`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px;color:red;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
					);
				});

				it("query beautify", () => {
					var css = __webpack_require__(3);
					expectOutput(
						css,
						'@charset "utf-8";\nh1::before,\nh1:before {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-weight: 400;\n  font-weight: 400;\n  background-position: bottom right;\n  quotes: "«" "»";\n  background: linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);\n  min-width: initial\n}'
					);
				});

				it("css-loader", () => {
					var css = __webpack_require__(4)
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
						__webpack_require__(1),
						`@charset \"utf-8\";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:\"«\" \"»\";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
					);
				});
			});

			/***/
		},
		/* 1 */
		/***/ function(module, exports) {
			module.exports =
				'@charset "utf-8";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:"«" "»";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}';

			/***/
		},
		/* 2 */
		/***/ function(module, exports) {
			module.exports =
				'@charset "utf-8";h1::before,h1:before{margin:10px 20px;color:red;font-weight:400;background-position:bottom right;quotes:"«" "»";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}';

			/***/
		},
		/* 3 */
		/***/ function(module, exports) {
			module.exports =
				'@charset "utf-8";\nh1::before,\nh1:before {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-weight: 400;\n  font-weight: 400;\n  background-position: bottom right;\n  quotes: "«" "»";\n  background: linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);\n  min-width: initial\n}';

			/***/
		},
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {
			exports = module.exports = __webpack_require__(5)();
			exports.push([
				module.id,
				'@charset "utf-8";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:"«" "»";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}',
				""
			]);

			/***/
		},
		/* 5 */
		/***/ function(module, exports) {
			/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
			// css base code, injected by the css-loader
			module.exports = function() {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					var result = [];
					for (var i = 0; i < this.length; i++) {
						var item = this[i];
						if (item[2]) {
							result.push("@media " + item[2] + "{" + item[1] + "}");
						} else {
							result.push(item[1]);
						}
					}
					return result.join("");
				};

				// import a list of modules into the list
				list.i = function(modules, mediaQuery) {
					if (typeof modules === "string") modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number") alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (
							typeof item[0] !== "number" ||
							!alreadyImportedModules[item[0]]
						) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};

			/***/
		}
		/******/
	]
);
