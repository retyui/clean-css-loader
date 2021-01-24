import loader from "../../src/index";

const runW1 = (input, module) =>
	new Promise((res) => {
		const arrayWarn = [];
		let options;
		if (module) {
			options = { module };
		}
		loader.call(
			{
				options,
				async: () => (err, css, map) => {
					res([css, map, arrayWarn]);
				},
			},
			input
		);
	});

const runW5 = (input, options = {}) =>
	new Promise((res, rej) => {
		const arrayWarn = [];
		loader.call(
			{
				query: options,
				emitWarning: (warnStr) => arrayWarn.push(warnStr),
				async: () => (err, css, map) => {
					if (err) {
						rej(err);
					} else {
						res([css, map, arrayWarn]);
					}
				},
			},
			input
		);
	});
const expectOutput = (input, output) =>
	expect(input.replace(/\r\n/g, "\n")).toEqual(output);

describe("clean-css-loader", () => {
	describe("webpack 1", () => {
		it("should minimize css", async () => {
			const [css, map, warn] = await runW1("div { background: white; }");
			expectOutput(css, "div{background:#fff}");
			expect(warn).toEqual([]);
			expect(map).toBeUndefined();
		});

		it("should return restructured css CleanCSS", async () => {
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
					CleanCSS: {
						level: {
							1: {
								all: true,
								normalizeUrls: false,
							},
							2: {
								restructureRules: true,
							},
						},
					},
				}
			);
			expectOutput(css, ".two{margin:0}.one{padding:0;margin-bottom:3px}");
			expect(warn).toEqual([]);
			expect(map).toBeUndefined();
		});
	});

	describe("webpack 4", () => {
		it("should minimize css", async () => {
			const [css, map, warn] = await runW5("div { background: white; }");
			expectOutput(css, "div{background:#fff}");
			expect(warn).toEqual([]);
			expect(map).toBeUndefined();
		});

		it("should return restructured css", async () => {
			const [css, map, warn] = await runW5(
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
							normalizeUrls: false,
						},
						2: {
							restructureRules: true,
						},
					},
				}
			);
			expectOutput(css, ".two{margin:0}.one{padding:0;margin-bottom:3px}");
			expect(warn).toEqual([]);
			expect(map).toBeUndefined();
		});

		it("should throw error", async () => {
			try {
				await runW5(`@import url("404.css");`);
			} catch (err) {
				expect(() => {
					throw err;
				}).toThrowError(/404/);
			}
		});

		it("should return warn", async () => {
			const [css, map, warn] = await runW5("a{display:block");
			expectOutput(css, "a{display:block}");
			expect(warn).toEqual(["Missing '}' at 1:15."]);
			expect(map).toBeUndefined();
		});

		it("should skiped Warnings", async () => {
			const [css, map, warn] = await runW5("a{display:block", {
				skipWarn: true,
			});
			expectOutput(css, "a{display:block}");
			expect(warn).toEqual([]);
			expect(map).toBeUndefined();
		});

		it("should return sourceMap", async () => {
			const [css, map, warn] = await runW5("a { display : block; }", {
				sourceMap: true,
			});
			expectOutput(css, "a{display:block}");
			expect(warn).toEqual([]);
			expect(map.toString()).toEqual(
				`{"version":3,"sources":["$stdin"],"names":[],"mappings":"AAAA,EAAI,QAAU"}`
			);
		});
	});
});
