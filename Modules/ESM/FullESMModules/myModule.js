// myModule.js
let password;

if (typeof fetch === "undefined") {
  // We are running in Node.js; use node-fetch
  globalThis.fetch = (await import("node-fetch")).default;
}
// …
if (typeof process !== "undefined") {
  // We are running in Node.js; read it from `process.env`
  password = process.env.PASSWORD;
} else if (typeof window !== "undefined") {
  // We are running in the browser; read it from the input box
  password = document.getElementById("password").value;
}
