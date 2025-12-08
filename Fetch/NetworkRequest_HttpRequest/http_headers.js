xhr.setRequestHeader('Content-Type', 'application/json');

xhr.setRequestHeader('X-Auth', '123');
xhr.setRequestHeader('X-Auth', '456');

// the header will be:
// X-Auth: 123, 456

xhr.getResponseHeader('Content-Type')
