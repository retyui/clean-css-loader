import CleanCSS from 'clean-css';
import loaderUtils from 'loader-utils';

export default function cleanCssLoader(css, map) {
	const that = this;
	const options = that.options ? that.options.module : false;
	const query = loaderUtils.getOptions(that);
	const cleanCssOptions = query || (options ? options.cleancss || options['clean-css'] || options.CleanCSS : false) || {};
	const callback = that.async();

	return new CleanCSS(cleanCssOptions).minify(css, map, (err, minified) => {
		if (err) {
			if (Array.isArray(err) && err[0]) {
				return callback(err[0]);
			}
			return callback(err);
		}

		if (!cleanCssOptions.skipWarn && Array.isArray(minified.warnings)) {
			minified.warnings.forEach(msg => {
				that.emitWarning(msg.toString());
			});
		}

		return callback(null, minified.styles, minified.sourceMap);
	});
}
