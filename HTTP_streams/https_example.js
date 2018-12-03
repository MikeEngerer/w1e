var https = require("https");

var options = {
  host: 'example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(res) {
  console.log('In response handler callback!');
  console.log("Response: ", res)
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
