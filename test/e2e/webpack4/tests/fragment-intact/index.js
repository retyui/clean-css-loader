it("fragment-intact", function() {
	expect(require("./input.css").replace(/\r\n/g, "\n")).toEqual(
		".block-1{color:red}.block-special{color:transparent}.block-2{margin:0}"
	);
});
