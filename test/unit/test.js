const loader = require("../../lib/index");

const runW5 = (input, options = {}) =>
  new Promise((res, rej) => {
    const arrayWarn = [];
    loader.call(
      {
        getOptions: () => options,
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

const expectOutput = (input, output) => expect(input.replace(/\r\n/g, "\n")).toEqual(output);

describe("clean-css-loader", () => {
  describe("webpack 5", () => {
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
      expect(warn).toEqual([new Error(`Missing '}' at 1:15.`)]);
      expect(map).toBeUndefined();
    });

    it("should skipped Warnings", async () => {
      const [css, map, warn] = await runW5("a{display:block", {
        skipWarn: true,
      });
      expectOutput(css, "a{display:block}");
      expect(warn).toEqual([]);
      expect(map).toBeUndefined();
    });

    it("should skipped Warnings and parse bool params", async () => {
      const [css, map, warn] = await runW5("a{display:block", {
        skipWarn: 'true',
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
      expect(map).toEqual({ version: 3, sources: [undefined], names: [], mappings: "AAAA,EAAI,QAAU", sourcesContent: ["a { display : block; }"] });
    });
  });
});
