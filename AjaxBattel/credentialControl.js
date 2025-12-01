const res = await fetch("/service", {
  method: "GET",
  credentials: "same-origin",
});

// credentials can be set to:

// 'omit' - exclude cookies and HTTP authentication entries (the default)
// 'same-origin' - include credentials with requests to same-origin URLs
// 'include' - include credentials on all requests
// Note that include was the default in earlier API implementations. Explicitly set the credentials property if your users are likely to run older browsers.