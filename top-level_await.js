// we assume this code runs at top level, inside a module
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

console.log(user);

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  
})();