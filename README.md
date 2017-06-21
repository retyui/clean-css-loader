<div align="center">
  <img src="https://cdn.rawgit.com/jakubpawlowicz/clean-css/master/logo.v2.svg" alt="clean-css logo" width="525px"/>
  <br>
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>


A [clean-css](https://github.com/jakubpawlowicz/clean-css) loader for [webpack](https://github.com/webpack/webpack).

# Clean-CSS-loader [![Build Status](https://travis-ci.org/retyui/clean-css-loader.svg?branch=master)](https://travis-ci.org/retyui/clean-css-loader) [![npm version](https://badge.fury.io/js/clean-css-loader.svg)](https://badge.fury.io/js/clean-css-loader) [![dependencies Status](https://david-dm.org/retyui/clean-css-loader/status.svg)](https://david-dm.org/retyui/clean-css-loader)


## Install
`npm i -D clean-css-loader` <em>or</em> `yarn add clean-css-loader --dev`

## Usage

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```js
const production = false;

const cssUseList = [ 'style-loader', 'css-loader' ];

if(production){
  cssUseList.push('clean-css-loader');
  // or
  cssUseList.push({
    loader: 'clean-css-loader',
    options: {
      compatibility: 'ie9',
      level: 2,
      inline: ['remote']
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
}
```

**In your application**
```js
import cssMin from 'style.css';
```

### CLI

```bash
webpack --module-bind 'css=style-loader!css-loader!clean-css-loader'
```

**In your application**
```js
import cssMin from 'style.css';
```

### Inline

**In your application**
```js
import cssMin from 'style-loader!css-loader!clean-css-loader!./style.css';
```


## Options

More option: [https://github.com/jakubpawlowicz/clean-css#constructor-options](https://github.com/jakubpawlowicz/clean-css#constructor-options)

## Webpack 1.x

**Example config (for webpack 1.x):**
```js
...
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css!clean-css'
      },
      {
        test: /\.styl$/,
        loader: 'css!clean-css!stylus?reslve url'
      }
      //...
    ]
    // Example Set options (Key "clean-css" or cleancss or CleanCSS):
    "clean-css":{
      debug:true,
      mediaMerging: true
    }
  }
```

[![NPM](https://nodei.co/npm-dl/clean-css-loader.png)](https://nodei.co/npm/clean-css-loader/)
