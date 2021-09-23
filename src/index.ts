import CleanCSS from "clean-css";
import { getOptions } from "loader-utils";
import { validate } from "schema-utils";

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

function cleanCssLoader(
  this: LoaderContext<LoaderOptions>,
  content: string | Buffer,
  prevSourceMap?: string | SourceMap,
  additionalData?: AdditionalData
): void {
  const callback = this.async();
  // 1.x.x return null if empty query
  // 2.x.x return empty object if empty query
  const loaderOptions = getOptions(this) || {};

  validate(schema as JSONSchema7, loaderOptions, {
    name: "group-css-media-queries-loader",
  });

  const { disable, skipWarn, ...options } = loaderOptions;

  if (disable) {
    return callback(null, content, prevSourceMap, additionalData);
  }

  new CleanCSS({
    returnPromise: true,
    ...options,
  })
    .minify(
      content,
      // @ts-ignore
      prevSourceMap
    )
    .then((output) => {
      if (!skipWarn && Array.isArray(output.warnings)) {
        output.warnings.forEach((warning) => {
          this.emitWarning(new Error(warning));
        });
      }

      return callback(
        null,
        output.styles,
        // @ts-ignore
        output.sourceMap,
        additionalData
      );
    })
    .catch(callback);
}

export = cleanCssLoader;
