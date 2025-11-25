async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

// If we try to use await in a non-async function, there would be a syntax error:

// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // Syntax error
// }