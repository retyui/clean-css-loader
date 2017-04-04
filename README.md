<div align="center">
  <img src="https://cdn.rawgit.com/jakubpawlowicz/clean-css/master/logo.v2.svg" alt="clean-css logo" width="525px"/>
  <br>
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>


A [clean-css](https://github.com/jakubpawlowicz/clean-css) loader for [webpack](https://github.com/webpack/webpack).

[![npm version](https://badge.fury.io/js/clean-css-loader.svg)](https://badge.fury.io/js/clean-css-loader)


<h2 align="center">Install</h2>

```bash
npm install --save-dev clean-css-loader
```
<em>or</em>
```bash
yarn add clean-css-loader --dev
```

<h2 align="center">Usage</h2>

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```js
const production = false;

let css_arr_use = [ 'style-loader', 'css-loader' ];

if(production){
  css_arr_use.push('clean-css-loader');
  // or
  css_arr_use.push({
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
        use: css_arr_use
      }
    ]
  }
}
```

**In your application**
```js
import css_min from 'style.css';
```

### CLI

```bash
webpack --module-bind 'css=style-loader!css-loader!clean-css-loader'
```

**In your application**
```js
import css_min from 'style.css';
```

### Inline

**In your application**
```js
import css_min from 'style-loader!css-loader!clean-css-loader!./style.css';
```


<h2 align="center">Options</h2>

More option: [https://github.com/jakubpawlowicz/clean-css#constructor-options](https://github.com/jakubpawlowicz/clean-css#constructor-options)






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

[![NPM](https://nodei.co/npm-dl/clean-css-loader.png?height=3)](https://nodei.co/npm/clean-css-loader/)