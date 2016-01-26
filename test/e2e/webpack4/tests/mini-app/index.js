it("mini-app", function() {
	expect(require("./input.css").replace(/\r\n/g, "\n")).toEqual(
		`@charset "utf-8";h1::before,h1:before{margin:10px 20px 10px 20px;color:red;font-weight:400;font-weight:400;background-position:bottom right;quotes:"«" "»";background:linear-gradient(to bottom,#ffe500 0,#ffe500 50%,#121 50%,#121 100%);min-width:initial}`
	);
});
