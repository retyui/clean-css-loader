/******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // object to store loaded and loading wasm modules
	/******/
	/******/ /******/ var installedWasmModules = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {}
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		); // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				/******/ configurable: false,
				/******/ enumerable: true,
				/******/ get: getter
				/******/
			});
			/******/
		}
		/******/
	}; // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function(exports) {
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = ""; // object with all compiled WebAssembly.Modules
	/******/
	/******/ /******/ __webpack_require__.w = {}; // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__(
		(__webpack_require__.s = "./index.js")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./index.js":
			/*!******************!*\
  !*** ./index.js ***!
  \******************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval(
					'it("fragment-intact", function() {\n\texpect(__webpack_require__(/*! ./input.css */ "./input.css").replace(/\\r\\n/g, "\\n")).toEqual(\n\t\t".block-1{color:red}.block-special{color:transparent}.block-2{margin:0}"\n\t);\n});\n\n\n//# sourceURL=webpack:///./index.js?'
				);

				/***/
			},

		/***/ "./input.css":
			/*!*******************!*\
  !*** ./input.css ***!
  \*******************/
			/*! no static exports found */
			/***/ function(module, exports) {
				eval(
					'module.exports = ".block-1{color:red}.block-special{color:transparent}.block-2{margin:0}"\n\n//# sourceURL=webpack:///./input.css?'
				);

				/***/
			}

		/******/
	}
);
