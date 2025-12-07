let xhr = new XMLHttpRequest();

xhr.open(method, URL, [async, user, password])

// This method specifies the main parameters of the request:

// method – HTTP-method. Usually "GET" or "POST".
// URL – the URL to request, a string, can be URL object.
// async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
// user, password – login and password for basic HTTP auth (if required).

xhr.send([body])

// Listen to xhr events for response.

// These three events are the most widely used:

// load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.
// error – when the request couldn’t be made, e.g. network down or invalid URL.
// progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.
