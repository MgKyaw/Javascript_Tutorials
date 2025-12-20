// First, we can’t dynamically generate any parameters of import.
// import ... from getModuleName(); // Error, only from "string" is allowed

// Second, we can’t import conditionally or at run-time:

// if(...) {
//   import ...; // Error, not allowed!
// }

// {
//   import ...; // Error, we can't put import in any block
// }
