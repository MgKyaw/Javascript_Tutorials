async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// const response = await fetch("https://example.org/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "example" }),
//   // …
// });

// You can supply the body as an instance of any of the following types:

// a string
// ArrayBuffer
// TypedArray
// DataView
// Blob
// File
// URLSearchParams
// FormData
// ReadableStream

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // …
});
