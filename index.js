var loaderUtils = require('loader-utils');
var CleanCSS = require('clean-css');


module.exports = function (css, map) {

	var opti = this.options;
	var cleanCssOpti = opti.cleancss || opti['clean-css'] || opti.CleanCSS || {};
	var callback = this.async();

	new CleanCSS(cleanCssOpti).minify(css, function (err, minified) {
		if ( err ) { return callback(err);}
		// minified.styles
		return callback(null, minified.styles, minified.sourceMap);
	});

};
