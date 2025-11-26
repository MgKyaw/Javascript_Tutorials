async function f() {
  await Promise.reject(new Error("Whoops!"));
}
