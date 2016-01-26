const loader = require("../../lib/index.js");

const runW1 = (input, options = {}) =>
	new Promise((res, rej) => {
		const arrayWarn = [];
		loader.call(
			{
				options: {
					module: {
						"clean-css": options
					}
				},
				emitWarning: warnStr => arrayWarn.push(warnStr),
				async: () => (err, css, map) => {
					if (err) {
						rej(err);
					} else {
						res([css, map, arrayWarn]);
					}
				}
			},
			input
		);
	});

const runW4 = (input, options = {}) =>
	new Promise((res, rej) => {
		const arrayWarn = [];
		loader.call(
			{
				query: options,
				emitWarning: warnStr => arrayWarn.push(warnStr),
				async: () => (err, css, map) => {
					if (err) {
						rej(err);
					} else {
						res([css, map, arrayWarn]);
					}
				}
			},
			input
		);
	});
const expectOutput = (input, output) =>
	expect(input.replace(/\r\n/g, "\n")).toEqual(output);

describe("clean-css-loader", () => {
	describe("webpack 1", () => {
		it("should return restructured css", async () => {
			const [css, map, warn] = await runW1(
				`.one {
	padding: 0;
}
.two {
	margin: 0;
}
.one {
	margin-bottom: 3px;
}
`,
				{
					level: {
						1: {
							all: true,
							normalizeUrls: false
						},
						2: {
							restructureRules: true
						}
					}
				}
			);
			expectOutput(css, ".two{margin:0}.one{padding:0;margin-bottom:3px}");
			expect(warn).toEqual([]);
			expect(map).toEqual(undefined);
		});
	});

	describe("webpack 4", () => {
		it("should minimize css", async () => {
			const [css, map, warn] = await runW4("div { background: white; }");
			expectOutput(css, "div{background:#fff}");
			expect(warn).toEqual([]);
			expect(map).toEqual(undefined);
		});

		it("should return restructured css", async () => {
			const [css, map, warn] = await runW4(
				`.one {
	padding: 0;
}
.two {
	margin: 0;
}
.one {
	margin-bottom: 3px;
}
`,
				{
					level: {
						1: {
							all: true,
							normalizeUrls: false
						},
						2: {
							restructureRules: true
						}
					}
				}
			);
			expectOutput(css, ".two{margin:0}.one{padding:0;margin-bottom:3px}");
			expect(warn).toEqual([]);
			expect(map).toEqual(undefined);
		});

		it("should throw error", async () => {
			try {
				await runW4(`@import url("404.css");`);
			} catch (err) {
				expect(() => {
					throw err;
				}).toThrowError(/404/);
			}
		});

		it("should return warn", async () => {
			const [css, map, warn] = await runW4("a{display:block");
			expectOutput(css, "a{display:block}");
			expect(warn).toEqual(["Missing '}' at 1:15."]);
			expect(map).toEqual(undefined);
		});

		it("should return sourceMap", async () => {
			const [css, map, warn] = await runW4("a { display : block; }", {
				sourceMap: true
			});
			expectOutput(css, "a{display:block}");
			expect(warn).toEqual([]);
			expect(map.toString()).toEqual(
				`{"version":3,"sources":["$stdin"],"names":[],"mappings":"AAAA,EAAI,QAAU"}`
			);
		});
	});
});
