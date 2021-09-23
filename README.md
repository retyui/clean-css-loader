<div align="center">
    <img src="https://cdn.rawgit.com/jakubpawlowicz/clean-css/master/logo.v2.svg" alt="clean-css logo" width="400"/>
    <br>
    <a href="https://github.com/webpack/webpack">
        <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
</div>

A [clean-css](https://github.com/jakubpawlowicz/clean-css) loader for [webpack](https://github.com/webpack/webpack).

# clean-css-loader

[![npm](https://img.shields.io/npm/v/clean-css-loader.svg)](https://www.npmjs.com/package/clean-css-loader)
[![CI](https://github.com/retyui/clean-css-loader/actions/workflows/nodejs.yml/badge.svg)](https://github.com/retyui/clean-css-loader/actions/workflows/nodejs.yml)
[![npm clean-css-loader](https://img.shields.io/npm/dm/clean-css-loader.svg)](https://www.npmjs.com/package/clean-css-loader)

## Getting Started

To begin, you'll need to install clean-css-loader:

```bash
yarn add -D clean-css-loader
```

Then add the plugin to your webpack config. For example:

```tsx
// webpack.config.js
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "clean-css-loader",
            options: {
              // Loader options
              disable: !isProduction,
              skipWarn: false,

              // CleasCSS options
              compatibility: "ie9",
              level: 2,
              inline: ["remote"],
              //...
            },
          },
        ],
      },
    ],
  },
};
```

### CLI usage

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

#### `disable`

This option enables/disables minify, useful to easily disable on development mode (default: `false`)

#### `skipWarn`

This option enables/disables output warnings (default: `false`)

---

## `CleanCSS` module options

- [clean-css/clean-css#constructor-options](https://github.com/jakubpawlowicz/clean-css#constructor-options)
