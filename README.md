A [clean-css](https://github.com/jakubpawlowicz/clean-css) loader for [webpack](https://github.com/webpack/webpack).

[![npm version](https://badge.fury.io/js/clean-css-loader.svg)](https://badge.fury.io/js/clean-css-loader)


**Example config:**

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
      ...
    ]
    // Example Set options (Key "clean-css" or cleancss or CleanCSS):
    "clean-css":{
      debug:true,
      mediaMerging: true
    }
  }
```
More option: [https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api)

