var path = require("path");

function mp(relFontPath) {
	return path.resolve(__dirname, relFontPath)
}

var fonts = {
	Roboto: {
		normal: mp('./fonts/Roboto-Regular.ttf'),
		bold: mp('./fonts/Roboto-Medium.ttf'),
		italics: mp('./fonts/Roboto-Italic.ttf'),
		bolditalics: mp('./fonts/Roboto-MediumItalic.ttf')
	}
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var imgTL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADISURBVGhD7ZnRCoMwEMCu+/9/7pTKWB8Kjl4dJQmIfRBpIOihJSLqcaRSa/oto5Rzq7m8rjMStHyX/Uyu31muzj5rn2ZPZZj9nafr6Pons5/Zp9lTUZ6K8lSUp3K+8T8TwMxw8q8h51ccci7Mvi3zWJ19FmZPpRyJ5je6CWZPRXkqylNRnoryVJSnojwV5akoT0V5Ktt8t1+B2VPpss/6+2n2G2D2bdnneuev6Oh6s98A5akoT0V5Kmh5Z3sqZt+WeZj9BoDlI95NT1BXCqamYwAAAABJRU5ErkJggg==';
var imgTR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADJSURBVGhD7ZnRCoMwEMCu+/9/7pQV2R4KlZ6zkgTEPog0EPTQEhF1O1KpNf2WUcq+1Vxe7YwELf+T/Uyu31lenX3WPs2eSjf7kadr7/p/Zj+zT7OnojwV5akoT2V/4x8TwMxwcteQcxaHnIbZf5Z5XJ19FmZPpWyJ5jf6EMyeivJUlKeiPBXlqShPRXkqylNRnoryVB7zAdPv9smYfVsvjX9pkzH7tl6aXvYjb4He9WZPRXkqylNRnoqzPRWzb+ulGZnhz2L2TCLeBRhQZl+RJmoAAAAASUVORK5CYII=';



function header(text) {
	return {text: text, margins: [0, 0, 0, 8]};
}

var docDefinition = {

	pageSize: 'LETTER',
	pageMargins: [10, 10, 10, 10],
	content: [
		{
			image: imgTL,
			absolutePosition: {x:7.5, y:7.5}
		},
		{
			image: imgTR,
			absolutePosition: {x:450, y:7.5}
		},

	]
}

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream(mp('imgtest.pdf')));
pdfDoc.end();

//small change .. more detail