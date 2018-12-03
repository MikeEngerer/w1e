var https = require("https");

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(res) {
  console.log('In response handler callback!');
  res.on("data", function(chunk) {
  	console.log("Chunk of length: ", chunk.length);
  	console.log(chunk.toString());
  })
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

/*vagrant [HTTP_streams]> node https_example.js 
I'm about to make the request!
I've made the request!
events.js:183
      throw er; // Unhandled 'error' event
      ^

Error: getaddrinfo ENOTFOUND example.org example.org:443
    at errnoException (dns.js:50:10)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:92:26)
    */
