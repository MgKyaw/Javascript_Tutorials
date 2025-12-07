let xhr = new XMLHttpRequest();

xhr.open(method, URL, [async, user, password])

// This method specifies the main parameters of the request:

// method – HTTP-method. Usually "GET" or "POST".
// URL – the URL to request, a string, can be URL object.
// async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
// user, password – login and password for basic HTTP auth (if required).

xhr.send([body])
