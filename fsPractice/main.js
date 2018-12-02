// // var fs = require("fs");

// // fs.readFile("input.txt", function(err, data) {
// // 	if (err) {
// // 		return (console.log(err))
// // 	}
// // 	console.log(data.toString());
// // })

// // var data = fs.readFileSync("input.txt")
// // console.log(data.toString());
// // console.log("end")

// // fs.stat("input.txt", function(err, stats) {
// // 	if (err) {
// // 		return console.log(err)
// // 	}
// // 	console.log(stats)
// // 	console.log("read stats")
// // 	console.log(stats.isFile())
// // 	console.log(stats.isDirectory())
// // })
// var fs = require("fs");

// console.log("Going to create directory /tmp/test");
// fs.mkdir('aaf/tmp/test',function(err) {
//    if (err) {
//       return console.error("nah");
//    }
//    console.log("Directory created successfully!");
// });
var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});