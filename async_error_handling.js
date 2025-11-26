async function f() {
  await Promise.reject(new Error("Whoops!"));
}

//is the same as this:
// async function f() {
//   throw new Error("Whoops!");
// }