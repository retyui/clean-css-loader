var loaderUtils = require('loader-utils');
var CleanCSS = require('clean-css');


module.exports = function (css, map) {

	var opti = this.options.module;
	var cleanCssOpti = opti.cleancss || opti['clean-css'] || opti.CleanCSS || {};
	var loader = this;
	var callback = this.async();

	new CleanCSS(cleanCssOpti).minify(css, function (err, minified) {
		if ( err ) {
			if (Array.isArray(err) && (err[0] != null)) {
				return callback(err[0]);
			}else{
				return callback(err);
			}
		}
		var ref;
		if (((ref = minified.warnings) != null ? ref.lenght : void 0) !== 0) {
			ref.forEach(function (msg) {
				loader.emitWarning(msg.toString());
			});
		}
		// minified.styles
		return callback(null, minified.styles, minified.sourceMap);
	});

};
