module.exports = {
	linters: {
		"./**/*.js": ["prettier", "eslint --fix", "git add"],
		"./**/*.css": ["prettier", "git add"],
	},
	ignore: ["test/e2e/**/*.test.js"],
};
