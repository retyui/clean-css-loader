import CleanCSS from "clean-css";
import { getOptions } from "loader-utils";
import { validate } from "schema-utils";
import type { RawSourceMap } from "source-map";
import type { LoaderContext } from "webpack";
import type { JSONSchema7 } from "schema-utils/declarations/validate";

import schema from "./schema.json";

type CleanCSSOptions = Omit<
  Exclude<ConstructorParameters<typeof CleanCSS>[0], undefined>,
  "returnPromise"
>;

interface LoaderOptions extends CleanCSSOptions {
  skipWarn?: boolean;
  disable?: boolean;
  sourceMap?: boolean;
}

interface SourceMap {
  version: number;
  sources: string[];
  mappings: string;
  file?: string;
  sourceRoot?: string;
  sourcesContent?: string[];
  names?: string[];
}

interface AdditionalData {
  [index: string]: any;
  webpackAST: object;
}

function parsePrevSourceMap(
  prevSourceMap?: string | SourceMap
): RawSourceMap | string | undefined {
  if (prevSourceMap != null && typeof prevSourceMap === "object") {
    return JSON.stringify(prevSourceMap);
  }

  return undefined;
}

function getLoaderOptions(_that: LoaderContext<LoaderOptions>): LoaderOptions {
  // 3.x.x removed `getOptions` need to use `this.getOptions`
  if(typeof getOptions === 'function') {
    // 1.x.x return null if empty query
    // 2.x.x return empty object if empty query
    return getOptions(_that) || {};
  }

  if(typeof _that.getOptions === 'function') {
    const rawOptions:LoaderOptions = _that.getOptions() || {};

    // `loader-utils` has specific behavior for parsing query strings
    //   (true, false and null won't be parsed as string but as a primitive value)
    //   https://webpack.js.org/migrate/5/#getoptions-method-for-loaders
    Object.keys(rawOptions).forEach((key) => {
      const value = rawOptions[key as keyof LoaderOptions];

      if(['false','true','null'].includes(value as string)) {
        rawOptions[key as keyof LoaderOptions] = JSON.parse(value as string);
      }
    });

    return rawOptions;
  }

  return {};
}

function cleanCssLoader(
  this: LoaderContext<LoaderOptions>,
  content: string | Buffer,
  prevSourceMap?: string | SourceMap,
  additionalData?: AdditionalData
): void {
  const callback = this.async();

  const loaderOptions = getLoaderOptions(this);

  validate(schema as JSONSchema7, loaderOptions, {
    name: "clean-css-loader",
  });

  const { sourceMap, disable, skipWarn, ...options } = loaderOptions;
  const useSourceMap = Boolean(sourceMap ?? this.sourceMap);

  if (disable) {
    return callback(null, content, prevSourceMap, additionalData);
  }

  new CleanCSS({
    ...options,
    returnPromise: true,
    sourceMap: useSourceMap,
  })
    .minify(content, parsePrevSourceMap(prevSourceMap))
    .then((output) => {
      if (!skipWarn && Array.isArray(output.warnings)) {
        output.warnings.forEach((warning) => {
          this.emitWarning(new Error(warning));
        });
      }

      let resultSourceMap;

      if (useSourceMap && output.sourceMap) {
        resultSourceMap = {
          ...JSON.parse(output.sourceMap.toString()),
          // @ts-ignore
          sources: prevSourceMap?.sources || [this.resourcePath],
          // @ts-ignore
          sourcesContent: prevSourceMap?.sourcesContent || [content.toString()],
        };
      }

      return callback(null, output.styles, resultSourceMap, additionalData);
    })
    .catch(callback);
}

export = cleanCssLoader;
