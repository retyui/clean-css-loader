<div align="center">
    <img src="https://cdn.rawgit.com/jakubpawlowicz/clean-css/master/logo.v2.svg" alt="clean-css logo" width="500"/>
    <br>
    <a href="https://github.com/webpack/webpack">
        <img width="200" height="200"
            src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
</div>

A [clean-css](https://github.com/jakubpawlowicz/clean-css) loader for [webpack](https://github.com/webpack/webpack).

# clean-css-loader

[![npm](https://img.shields.io/npm/v/clean-css-loader.svg)](https://www.npmjs.com/package/clean-css-loader)
[![npm clean-css-loader](https://img.shields.io/npm/dm/clean-css-loader.svg)](https://www.npmjs.com/package/clean-css-loader)
[![AppVeyor](https://img.shields.io/appveyor/ci/retyui/clean-css-loader.svg?label=windows)](https://ci.appveyor.com/project/retyui/clean-css-loader)
[![Travis](https://img.shields.io/travis/retyui/clean-css-loader.svg?label=unix)](https://travis-ci.org/retyui/clean-css-loader)

## Install

```bash
yarn add -D clean-css-loader
```

## Usage

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**

```js
const production = false;

const cssUseList = ["style-loader", "css-loader"];

if (production) {
	cssUseList.push("clean-css-loader");
	// or with options
	cssUseList.push({
		loader: "clean-css-loader",
		options: {
			compatibility: "ie9",
			level: 2,
			inline: ["remote"]
		}
	});
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssUseList
			}
		]
	}
};
```

**In your application**

```js
import cssMin from "style.css";
```

### CLI

```bash
webpack --module-bind 'css=style-loader!css-loader!clean-css-loader'
```

**In your application**

```js
import cssMin from "style.css";
```

### Inline

**In your application**

```js
import cssMin from "style-loader!css-loader!clean-css-loader!./style.css";
```

## Options

### `skipWarn` default: `false`

This option disable output warnings

More option: [https://github.com/jakubpawlowicz/clean-css#constructor-options](https://github.com/jakubpawlowicz/clean-css#constructor-options)

## Webpack 1.x

**Example config (for webpack 1.x):**

```js
module.exports = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "css!clean-css"
			},
			{
				test: /\.styl$/,
				loader: "css!clean-css!stylus?reslve url"
			}
			//...
		],
		// Example Set options (Key "clean-css" or cleancss or CleanCSS):
		"clean-css": {
			debug: true,
			mediaMerging: true
		}
	}
};
```
