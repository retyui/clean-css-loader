const { resolve } = require("path");

const getConfig = (context, outputFilename, options = {}) => ({
  entry: "./index.js",
  context,
  output: {
    path: context,
    filename: outputFilename,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "raw-loader",
          {
            loader: require.resolve('../../../lib/index.js'),
            options,
          },
        ],
      },
    ],
  },
});

module.exports = [
  getConfig(
    resolve(__dirname, "./tests/fragment-intact/"),
    "fragment-intact.test.js"
  ),
  getConfig(resolve(__dirname, "./tests/mini-app/"), "mini-app.test.js"),
  getConfig(
    resolve(__dirname, "./tests/restructuring/"),
    "restructuring.test.js",
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
  ),
  getConfig(resolve(__dirname, "./tests/beautify/"), "beautify.test.js", {
    format: "beautify",
  }),
  getConfig(resolve(__dirname, "./tests/disable/"), "disable.test.js", {
    disable: true,
  }),
];
