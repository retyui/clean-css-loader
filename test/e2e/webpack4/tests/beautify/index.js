it("beautify", function() {
	expect(require("./input.css").replace(/\r\n/g, "\n")).toEqual(`.one {
  padding: 0
}
.two {
  margin: 0
}
.three {
  margin-bottom: 3px
}
* {
  padding: 0;
  margin: 0
}`);
});
