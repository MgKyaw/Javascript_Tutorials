// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }

//is the same as this:
// async function f() {
//   throw new Error("Whoops!");
// }

// async function f() {

//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }
// }

// f();

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
