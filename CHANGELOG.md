# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).

## 4.2.1

- Fix passing loader options when using `this.getOptions()` from webpack 5.x.x
  
  ```tsx
  import "clean-css-loader?skipWarn=true!./style.css"; 
  // {skipWarn: true  } loader-utils@2.x.x
  // {skipWarn: 'true'} webpack@5.x.x, unexpected behavior :(
  ```

  > `loader-utils` has specific behavior for parsing query strings (`true`, `false` and `null` won't be parsed as string but as a primitive value)

## 4.2.0

- Add support [`loader-utils@3.x.x`](https://github.com/webpack/loader-utils/releases/tag/v3.0.0)
- Drop Node.js 10 support

## 4.1.0

- Auto-configure `sourceMap` option, based on [`.devtool`](https://webpack.js.org/configuration/devtool/#devtool)

## 4.0.0

- Migrate to the latest [`clean-css`](https://clean-css.github.io/) version `5.x.x`
- Add Schema validation
- Add new option `disable: boolean`
- Drop support `webpack@1.x.x`
- Add Typescript

## 3.0.0

- Drop support node v8
- Update `loader-utils` to the latest version
- Update webpack peer dependencies limit (thanks [@daniele-orlando](https://github.com/daniele-orlando) [#15](https://github.com/retyui/clean-css-loader/issues/15))
- Update dev dependency
- Update webpack e2e tests from `webpack@4` => `webpack@5`

## 2.0.0

- Drop support node v6

## 1.1.0

- Update babel to latest version
- Update dependencies

## 1.0.0

- Init version
