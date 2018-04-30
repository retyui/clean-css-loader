import CleanCSS from "clean-css";
import { getOptions } from "loader-utils";

export default function cleanCssLoader(css, map) {
	const options = this.options ? this.options.module : false;
	const query = getOptions(this);
	const cleanCssOptions =
		query ||
		(options
			? options.cleancss || options["clean-css"] || options.CleanCSS
			: false) ||
		{};
	const callback = this.async();

	return new CleanCSS(cleanCssOptions).minify(css, map, (err, minified) => {
		if (err) {
			return callback(err[0]);
		}

		if (!cleanCssOptions.skipWarn && Array.isArray(minified.warnings)) {
			minified.warnings.forEach(warning => {
				this.emitWarning(warning.toString());
			});
		}

		return callback(null, minified.styles, minified.sourceMap);
	});
}
