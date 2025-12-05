// A typical fetch request consists of two await calls:

let response = await fetch(url, options); // resolves with response headers
let result = await response.json(); // read body as json

// Or, without await:

fetch(url, options)
  .then(response => response.json())
  .then(result => console.log("result"))

