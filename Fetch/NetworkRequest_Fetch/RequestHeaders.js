let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});

// But there’s a list of forbidden HTTP headers that we can’t set:

// Accept-Charset, Accept-Encoding
// Access-Control-Request-Headers
// Access-Control-Request-Method
// Connection
// Content-Length
// Cookie, Cookie2
// Date
// DNT
// Expect
// Host
// Keep-Alive
// Origin
// Referer
// TE
// Trailer
// Transfer-Encoding
// Upgrade
// Via
// Proxy-*
// Sec-*