it("disable", function() {
	expect(require("./input.css").default).toEqual(`.one {
  padding: 0;
}
.two {
  margin: 0;
}
.three {
  margin-bottom: 3px;
}
* {
  padding: 0;
  margin: 0;
}
`);
});
