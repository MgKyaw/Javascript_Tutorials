let xhr = new XMLHttpRequest();

xhr.open('GET', '/my/url');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { // HTTP error?
    // handle error
    alert( 'Error: ' + xhr.status);
    return;
  }

  // get the response from xhr.response
};

xhr.onprogress = function(event) {
  // report progress
  alert(`Loaded ${event.loaded} of ${event.total}`);
};

xhr.onerror = function() {
  // handle non-HTTP error (e.g. network down)
};

// There are actually more events, the modern specification lists them (in the lifecycle order):

// loadstart – the request has started.
// progress – a data packet of the response has arrived, the whole response body at the moment is in response.
// abort – the request was canceled by the call xhr.abort().
// error – connection error has occurred, e.g. wrong domain name. Doesn’t happen for HTTP-errors like 404.
// load – the request has finished successfully.
// timeout – the request was canceled due to timeout (only happens if it was set).
// loadend – triggers after load, error, timeout or abort.
// The error, abort, timeout, and load events are mutually exclusive. Only one of them may happen.
