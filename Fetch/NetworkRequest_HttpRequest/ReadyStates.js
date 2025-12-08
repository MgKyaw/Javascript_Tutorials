// UNSENT = 0; // initial state
// OPENED = 1; // open called
// HEADERS_RECEIVED = 2; // response headers received
// LOADING = 3; // response is loading (a data packet is received)
// DONE = 4; // request complete

xhr.onreadystatechange = function() {
  if (xhr.readyState == 3) {
    // loading
  }
  if (xhr.readyState == 4) {
    // request finished
  }
};