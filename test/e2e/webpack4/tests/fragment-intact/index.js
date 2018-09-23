it("fragment-intact", function() {
	expect(require("./input.css").replace(/\r\n/g, "\n")).toEqual(
		".block-1{color:red}\n.block-special {\n    color: transparent\n}\n.block-2{margin:0}"
	);
});
