var input = process.argv[2];
var fs = require("fs")
var filePath = input;

fs.readFile(filePath, function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data.toString());
})



