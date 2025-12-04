// The basic syntax is:

let promise = fetch(url, [options])

// For example:

let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

// Second, to get the response body, we need to use an additional method call.

// Response provides multiple promise-based methods to access the body in various formats:

// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object (explained in the next chapter),
// response.blob() – return the response as Blob (binary data with type),
// response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
// additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.
