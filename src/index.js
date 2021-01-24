import CleanCSS from "clean-css";
import { getOptions } from "loader-utils";

function getCleanCssOptions({ query, options }) {
  if (query && Object.keys(query).length > 0) {
    return query;
  }

  const legacyOptionsSyntax =
    options && (options.cleancss || options["clean-css"] || options.CleanCSS);

  return legacyOptionsSyntax || {};
}

function cleanCssLoader(css, map) {
  const callback = this.async();
  const cleanCssOptions = getCleanCssOptions({
    query: getOptions(this),
    options: this.options ? this.options.module : false,
  });

  return new CleanCSS(cleanCssOptions).minify(css, map, (err, minified) => {
    if (err) {
      return callback(err[0]);
    }

    if (!cleanCssOptions.skipWarn && Array.isArray(minified.warnings)) {
      minified.warnings.forEach((warning) => {
        this.emitWarning(warning.toString());
      });
    }

    return callback(null, minified.styles, minified.sourceMap);
  });
}

export default cleanCssLoader;
