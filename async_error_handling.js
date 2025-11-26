// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }

//is the same as this:
// async function f() {
//   throw new Error("Whoops!");
// }

async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
