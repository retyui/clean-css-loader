it("restructuring", function() {
	expect(require("./input.css").default.replace(/\r\n/g, "\n")).toEqual(
		".two{margin:0}.one{padding:0;margin-bottom:3px}"
	);
});
