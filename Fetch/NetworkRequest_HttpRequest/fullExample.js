// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

// Once the server has responded, we can receive the result in the following xhr properties:

// status
// HTTP status code (a number): 200, 404, 403 and so on, can be 0 in case of a non-HTTP failure.
// statusText
// HTTP status message (a string): usually OK for 200, Not Found for 404, Forbidden for 403 and so on.
// response (old scripts may use responseText)
// The server response body.
// We can also specify a timeout using the corresponding property:

// xhr.timeout = 10000; // timeout in ms, 10 seconds

let url = new URL('https://google.com/search');
url.searchParams.set('q', 'test me!');

// the parameter 'q' is encoded
xhr.open('GET', url); // https://google.com/search?q=test+me%21

// Response Type
// We can use xhr.responseType property to set the response format:

// "" (default) – get as string,
// "text" – get as string,
// "arraybuffer" – get as ArrayBuffer (for binary data, see chapter ArrayBuffer, binary arrays),
// "blob" – get as Blob (for binary data, see chapter Blob),
// "document" – get as XML document (can use XPath and other XML methods) or HTML document (based on the MIME type of the received data),
// "json" – get as JSON (parsed automatically).
